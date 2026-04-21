<script>
    import Header from '../../../components/Header.svelte';
    import pattern from '$lib/assets/moroccan-pattern.svg';
    import QatarMuseums from '$lib/assets/qatar-home.svg';
    let { data } = $props();    
</script>

<Header />

<main>
    {#each data.projects as project}
        <section>
            <article class="title">
                <h1>{project.title}</h1>
                <h2>{project.title}</h2>
            </article>

            <article class="info">
                <img src={QatarMuseums} alt="Qatar Museums homepage artwork displaying a crown" width="300" height="150" />
                <p class="body">{project.body}</p>
            </article>

            <nav>
                <a href="https://github.com/Karima002/user-experience-enhanced-website-s10">[Github]</a>
                <a href="https://user-experience-enhanced-website-w869.onrender.com/en">[Live Site]</a>
            </nav>
        </section>

        <section class="outro">
            <p>{project.title}</p>
            <p>{project.title}</p>
            <p>{project.title}</p>
            <p>{project.title}</p>
        </section>
    {/each}
</main>

<style>
    :global(body) {
        background-color: black;
    }

    .title {
        display: grid;
        place-items: center;
    }

    h1, h2 {
        grid-area: 1/1;
        font-family: var(--font-title);
        font-size: clamp(4rem, 10vw, 40rem);
        font-family: var(--font-instrument-serif);
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
    }

    h1 {
        color: var(--neutral-color-white);
        padding: .2em;
        z-index: 2;
    }

    h2 {
        color: var(--accent-color-darkgreen);
        padding: .4em;
        z-index: 1;
        transform: translateY(.2em); 
        opacity: 0.7;
    }

    .body {
        font-family: var( --font-instrument-serif);
        font-size: clamp(1.5rem, 2vw, 3rem);
        color: var(--neutral-color-white);
        font-weight: 300;
        letter-spacing: 8%;
        text-align: center;
        margin: 2em;
        padding-top: 1.5em;
        text-align: left;
    }

    img {
        float: left; /* https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/float */
        width: 80%;
        max-width: 900px;
        height: auto;
        @media (min-width: 300px) {
            margin: 3em;

        }
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 2em;
        margin-top: 2em;
    }

    .outro {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--neutral-color-white);
        font-family: var(--font-text);
        font-size: clamp(1.5rem, 5vw, 9rem);
        margin-top: 2em;
        text-transform: uppercase;
    }
</style>