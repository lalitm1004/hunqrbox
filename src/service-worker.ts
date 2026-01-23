/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
/// <reference types="@sveltejs/kit" />

import { build, files, version } from '$service-worker'

const sw = self as unknown as ServiceWorkerGlobalScope

const CACHE_KEY = `cache-${version}`
const ASSETS = [...build, ...files]

// Install: Cache assets and homepage
sw.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_KEY).then(async (cache) => {
            await cache.addAll(ASSETS);
            await cache.add('/');
            return sw.skipWaiting();
        })
    );
});

// Activate: Clean old caches
sw.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_KEY)
                    .map(key => caches.delete(key))
            )
        ).then(() => sw.clients.claim())
    );
});

// Fetch: Serve from cache first
sw.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = new URL(event.request.url);

    if (ASSETS.includes(url.pathname)) {
        event.respondWith(
            caches.match(event.request).then((cached) => cached || fetch(event.request))
        );
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_KEY).then(cache => cache.put(event.request, clone));
                }
                return response;
            })
            .catch(() => caches.match(event.request).then(cached => cached || new Response('offline', { status: 503 })))
    );
});