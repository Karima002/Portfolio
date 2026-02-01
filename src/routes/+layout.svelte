<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/stylesheet.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Karima's Portfolio</title>
</svelte:head>

{@render children()}

<style>
	:global(body) {
        background-color: black;
        overflow: hidden;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
</style>