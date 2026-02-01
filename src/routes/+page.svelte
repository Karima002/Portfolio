<script>
    import Header from '../components/Header.svelte';
    import background from '$lib/assets/background-image.svg';
    import pattern from '$lib/assets/moroccan-pattern.svg';
    import { onMount } from "svelte";
  	import { gsap } from "gsap";
  	import SplitText from "gsap/SplitText";

	onMount(() => {
		let split = new SplitText(".intro-text", { type: "chars" });
		const tl = gsap.timeline();
		
		tl.from(split.chars, {
		duration: 1,
		opacity: 0,
		y: 50,
		stagger: 0.05, //https://gsap.com/resources/getting-started/Staggers/
		ease: "power2.out" 
		})

		.to('.intro', {
			autoAlpha: 0, 
			duration: 1,
			ease: 'power4.out'
		})

	});
</script>

<Header />

<main>
    <section class="intro">
        <h1 class="intro-text">Portfolio</h1>
    </section>

    <picture>
        <img class="background" src="{background}" alt="A dark green geometric pattern" />
        <img class="pattern" src="{pattern}" alt="A light darkgreen moroccan pattern" />
    </picture>  

    <h1>Karima Mouadi</h1>
    <h2>Frontend Design and Developer</h2>
</main>

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
    
    .intro {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        text-align: center;
        color: var(--neutral-color-white);
        background-color: var(--accent-color-darkgreen);
    }

    .intro-text {
        font-family: var(--font-text);
        font-size: var(--font-size-heading);
        bottom: 4em;
    }


    picture {
        display: flex;
        column-gap: 20em;
    }

    picture .background {
       position: relative;
       left: 15em;
    }

    h1, h2 {
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        font-size: var(--font-size-xl);
        position: relative;
        z-index: -1;
        bottom: 9em;
        padding-left: .5em;
            @media (min-width: 400px) {
                font-size: var(--font-size-xxl);
                bottom: 7.5em;
            }
            @media (min-width: 700px) {
                font-size: var(--font-size-heading);
                bottom: 4.2em;
            }
    }   

    h1 {
        text-transform: uppercase;
    }
</style>