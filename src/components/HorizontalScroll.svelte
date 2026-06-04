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
            return -(scrollWidth + window.innerWidth);
        }

        mm.add("(prefers-reduced-motion: no-preference)", () => {

            const tween =  gsap.fromTo(wrapper,
                { x: window.innerWidth },
                { x: getScrollAmount, ease: 'none',}
            );
            
            ScrollTrigger.create({
                trigger: wrapper,
                start: "top 20%",
                end: () => `+=${getScrollAmount() * -1} top`,
                pin: true,
                animation: tween,
                invalidateOnRefresh: true,
                scrub: 1,
            });
                
        });   
    });
</script>

<div class="scroll-container">
    <section class="wrapper">
        <article class="scroll-section">
                <h2 class="add-info">Web development and design with clean code, structure and creativity</h2>
        </article>
    </section>
</div>

<style>
    .scroll-container {
        overflow: hidden;
        width: 100vw;
    }

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
        padding-top: 1em;
        padding-bottom: .2em;
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        display: flex;   
        justify-content: left;
        align-items: flex-end;     
        padding-left: .4em;
        font-size: clamp(3em, 10vw, 20em);
            @media (min-width: 700px) {
                bottom: 4em;           
            }
    }
</style>
