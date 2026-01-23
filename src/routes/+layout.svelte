<script lang="ts">
	import "$lib/styles/app.css";
	import favicon from "$lib/assets/favicon.svg";
	import { onMount } from "svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>HunQRBox</title>
	<meta name="description" content="bhaiya code daaldo" />
	<link rel="icon" href={favicon} />

	<!-- PWA -->
	<link rel="manifest" href="/manifest.json" />
	<meta name="theme-color" content="#F5F3FF" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta
		name="apple-mobile-web-app-status-bar-style"
		content="black-translucent"
	/>
	<meta name="apple-mobile-web-app-title" content="HunQRBox" />
</svelte:head>

{@render children()}
