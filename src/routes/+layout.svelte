<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../styles/stylesheet.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfolio</title>
</svelte:head>

{@render children()}

