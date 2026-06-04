<script>
    import Header from '../../components/Header.svelte';
    import pattern from '$lib/assets/moroccan-pattern.svg';
    import { createClient } from '@supabase/supabase-js';
    import Civic from '$lib/assets/civic.png';
    import Funda from '$lib/assets/funda.png';
    import Qatar from '$lib/assets/qatar.png';
    import Redpers from '$lib/assets/redpers.png';
    import Fazael from '$lib/assets/fazael.svg';
    let { data } = $props();

</script>

<Header />

<main>
    

    <!-- <img class="pattern" src="{pattern}" alt="A light darkgreen moroccan pattern" /> -->
    <section>
        <ul>
            <li>
                <a href="/projects/qatarmuseums">
                    <img src="{Qatar}" alt="Qatar Museums" width="150" height="150" />
                </a>
            </li>
            <li>
                <a href="https://fazael.com">
                    <img src="{Fazael}" alt="Fazael" width="150" height="150" />
                </a>
            </li>
            <li>
                <a href="https://civicsocialmediaapp.netlify.app/">
                    <img src="{Civic}" alt="Civic Social Media" width="150" height="150" />
                </a>
            </li>
            <li>
                <a href="https://proof-of-concept-s12.onrender.com/detail/koop/Amsterdam/huis-Apollolaan-11/28">
                    <img src="{Funda}" alt="Funda" width="150" height="150" />
                </a>
            </li>
            
            <li>
                <a href="https://karima002.github.io/fix-the-flow-interactive-website-/">
                    <img src="{Redpers}" alt="Redpers" width="150" height="150" />
                </a>
            </li>
        </ul>

        <h1>Projects</h1>
    </section>

  {#each data.projects as project}
    <article>
        <h2>{project.title}</h2>
        <p>{project.body}</p>
    </article>
  {/each}
</main>

<style>
    :global(body) {
        background-color: black;
    }

    main {
        display: flex;
        flex-direction: row;
    }

    section {
        display: flex;
        justify-content: center;
        align-items: center;      
        width: 100%;   
        height: 80vh; 
    }

    h1 {
        color: white;
        font-size: clamp(4rem, 10vw, 40rem);
        font-family: var(--font-instrument-serif);
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;  
    }

    section {
        display: flex;
        flex-direction: column-reverse;
            @media (min-width: 768px) {
                flex-direction: column;
            }
    }

    section ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;
        list-style: none;
        @media (min-width: 768px) {
            display: flex;
            flex-direction: row;
            gap: 2em;
        }
    }

    h2 {
        color: white;
    }

    img {
        &:hover {
            transform: scale(1.20);
            transition: transform 0.3s ease;
        }
    }
    
</style>