<script>
    import Header from '../../components/Header.svelte';
    import pattern from '$lib/assets/moroccan-pattern.svg';
    import qatarMuseumsImg from '$lib/assets/qatar.svg';
    import civicSocialMediaImg from '$lib/assets/csm.svg';
    import fundaImg from '$lib/assets/funda.svg';
</script>

<Header />

<main>
    <img class="pattern" src="{pattern}" alt="A light darkgreen moroccan pattern" />

    <div class="main-content">
        <section>
            <img src="{qatarMuseumsImg}" alt="Qatar Museums website" />
            
            <nav>
                <h1>Qatar Museums</h1>
                <a>GitHub</a>
                <a>Website</a>
            </nav>
        </section>

        <section>
            <img src="{civicSocialMediaImg}" alt="Civic Social media website" />
            <nav>
                <h1>Civic Social media</h1>
                <a>GitHub</a>
                <a>Website</a>
            </nav>
        </section>

        <section>
            <img src="{fundaImg}" alt="Funda website" />
            <nav>
                <h1>Funda</h1>
                <a>GitHub</a>
                <a>Website</a>
            </nav>
        </section>
    </div>
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

    .main-content {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 6em 0 6em 6em;
        row-gap: 2em;

    }

    h1 {
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        font-size: var(--font-size-heading);
        font-weight: 100;
        text-transform: uppercase;
        margin-top: .5em;
    }

    section {
        display: flex;
        flex-direction: row;
        column-gap: 2em;
    }

    nav {
        display: flex;
        flex-direction: column;
        margin-left: 1em;
    }

    a {
        color: var(--neutral-color-white);
        font-family: var(--font-text);
        font-size: var(--font-size-xl);
        text-transform: uppercase;
            &:hover {
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: .3em;
                cursor: pointer;
            }
    }
</style>