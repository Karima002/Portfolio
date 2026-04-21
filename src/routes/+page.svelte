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

        .to(".intro-text", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.in"
        }, "+=1") //delay of 1 second after the previous animation

        .fromTo(".intro-text-arabic",{ 
            opacity: 0,
            y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out"
        }, "+=0.8")


		.to('.intro', {
			autoAlpha: 0, 
			duration: 1,
			ease: 'power4.out'
		})

        // Progressive Enhancement: If GSAP is not loaded, show the loader without animation. https://gsap.com/community/forums/topic/39201-best-practices-for-autoalpha-progressive-enhancement/
        if (typeof window.gsap === "undefined") {
        document.querySelector(".intro").classList.toggle("js");
        }
	});

     
</script>

<Header />

<main>
    <section class="intro js">
        <h1 class="intro-text ">Portfolio</h1>
        <h2 class="intro-text-arabic arabic-font">بـــــورتـفـوليـــــو</h2>
    </section>

    <picture>
        <img class="background" src="{background}" alt="A dark green geometric pattern" width="400" height="200" />
    </picture>  

    <h1 class="name">Karima Mouadi</h1>
    <h2 class="function">Frontend Design and Developer</h2>
</main>

<style>
    :global(body) {
        background-color: black;
    }
    
    .intro {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        text-align: center;
        color: var(--neutral-color-white);
        background-color: var(--accent-color-darkgreen);
    }

    .intro-text {
        position: absolute;
        font-family: var(--font-text);
        font-size: var(--font-size-heading);
        top: .1em;
    }

    .intro-text-arabic {
        position: absolute;
        font-family: var(--font-text);
        font-size: 4.8em;
        top: .1em;
    }

    .arabic-font {
        font-family: var(--font-arabic);
        font-weight: 100;

    }

    .background {
        position: relative;
        display: flex;
        width: 100%;
        height: 50vh;
        @media (min-width: 768px) {
            height: 90vh;

        }
    }

    .name, .function {
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        display: flex;   
        justify-content: left;
        align-items: flex-end;     
        padding-left: 1em;
        z-index: -2;
        font-size: clamp(var(--font-size-xxl), 5vw, var(--font-size-heading));
            @media (min-width: 700px) {
                position: relative;
                bottom: 4em;
            }
    } 

    .name {
        padding-top: 1em;
    }

    .js{
        display: none;
    }
</style>