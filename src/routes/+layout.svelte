<script lang="ts">
	import "$lib/styles/app.css";
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<title>HunQRBox</title>
	<meta name="description" content="bhaiya code daldo" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
