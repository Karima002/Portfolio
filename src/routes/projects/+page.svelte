<script>
    import Header from '../../components/Header.svelte';
    import pattern from '$lib/assets/moroccan-pattern.svg';
    import qatarMuseumsImg from '$lib/assets/qatar.png';
    import civicSocialMediaImg from '$lib/assets/csm.svg';
    import fundaImg from '$lib/assets/funda.svg';
</script>

<Header />

<main>
    <!-- <img class="pattern" src="{pattern}" alt="A light darkgreen moroccan pattern" /> -->
    <section>
        <h1>Projects</h1>
    </section>
</main>

<style>
    :global(body) {
        background-color: black;
    }

    main {
        padding-left: 2em;
        display: flex;
        flex-direction: row;
    }

    section {
        display: flex;
        display: flex;
        justify-content: center;
        align-items: center;      
        width: 100%;   
        height: 100vh; 
    }

    h1 {
        color: white;
        font-size: 12em;
        font-family: var(--font-instrument-serif);
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;  
    }
    
</style>