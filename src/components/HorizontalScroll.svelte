<script>
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import { onMount } from "svelte";
    
    gsap.registerPlugin(ScrollTrigger);
    
    onMount(() => {
        const wrapper = document.querySelector('.wrapper');
        let mm = gsap.matchMedia();

        function getScrollAmount () {
            let scrollWidth = wrapper.scrollWidth;
            return -(scrollWidth - window.innerWidth);
        }

        mm.add("(prefers-reduced-motion: no-preference)", () => {

            const tween =  gsap.fromTo(wrapper,
                { x: 0 },
                { x: getScrollAmount, ease: 'none',}
            );
            
            ScrollTrigger.create({
                trigger: wrapper,
                start: "top 20%",
                end: () => `+=${wrapper.scrollWidth - window.innerWidth}`,
                pin: true,
                animation: tween,
                invalidateOnRefresh: true,
                scrub: 1,
            });
                
        });   

        if (typeof window.gsap === "undefined") {
            document.querySelector(".add-info").classList.add("js");
        }
    });
</script>

<div class="scroll-container"> <!-- Needed the div wrapper for the overflow hidden-->
    <section class="wrapper">
        <article class="scroll-section">
                <h2 class="add-info">Web development and design with clean code, structure and creativity</h2>
        </article>
    </section>

    <section class="areas">
        <h2>Areas of expertise</h2>
    </section>
</div>

<style>
    .scroll-container {
        overflow: hidden;
        width: 100vw;

        .wrapper {
            display: flex;
            width: max-content;
        }
        
        .scroll-section { 
            padding: 4em 0 0 3em; 
            white-space: nowrap; 
            @media (min-width: 768px) { 
                padding: 4em 0 0 4.5em; 
            }
        }

        h2 {
        padding-top: .5em;
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        display: flex;   
        justify-content: left;
        align-items: flex-end;     
        padding-left: .4em;
        font-size: clamp(3em, 12vw, 20em);
            @media (min-width: 700px) {
                bottom: 4em;           
            }
        }
    }

    .areas {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 10em;
        h2 {
            font-size: var(--font-size-xxl);
        }
    }

    .js {
        display: block;
    }
</style>
