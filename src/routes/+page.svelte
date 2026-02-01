<script>
    import Header from '../components/Header.svelte';
    import background from '$lib/assets/background-image.svg';
</script>

<Header />

<main>
    <img src="{background}" alt="image of a dark green geometric pattern" />
</main>

<style>
    :global(body) {
        background-color: black;
    }
</style>