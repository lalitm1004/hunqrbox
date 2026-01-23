import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// import { SvelteKitPWA, type SvelteKitPWAOptions } from "@vite-pwa/sveltekit";

// const PwaConfig = () => {
//     let icons = [16, 32, 48, 64, 96, 128, 256, 512].map(size => ({
//         src: `/assets/logo-${size}.png`,
//         sizes: `${size}x${size}`,
//         type: 'image/png'
//     }))

//     let pwaConfig: SvelteKitPWAOptions = {
//         registerType: 'autoUpdate',
//         includeAssets: ['robots.txt'],
//         manifest: {
//             name: 'HunQRBox',
//             short_name: 'HunQRBox',
//             description: 'bhaiya code daaldo',
//             theme_color: '#F5F3FF',
//             background_color: '#3A1593',
//             display: 'standalone',
//             start_url: '/',
//             icons
//         }
//     };

//     return SvelteKitPWA(pwaConfig);
// }

export default defineConfig({ plugins: [tailwindcss(), sveltekit(),] });

