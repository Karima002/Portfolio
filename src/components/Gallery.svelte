<script>
    import figma from '$lib/assets/figma.jpg';
    import code from '$lib/assets/code.png';
    import frameworks from '$lib/assets/frameworks.png';
</script>

<nav>
    <ul class="gallery">
        <li class="gallery-item">
            <img class="image-1" src={figma} alt="A screenshot of the Figma logo showing a green, purple, red, orange and violet circle connected to each other" width="280" height="300" />
        </li>

        <li class="gallery-item">
            <img class="image-2" src={frameworks} alt="A screenshot of the frameworks logos sveltekit, astro, eleventy, nuxtjs" width="280" height="300" />
        </li>

        <li class="gallery-item">
            <img class="image-3" src={code} alt="White coding symbol </>" width="280" height="280" />
        </li>
    </ul>

    <ul>
        <li class="gallery-details section-1">
            <h2 class="gallery-title">Webdesign</h2>
            <p>UX / UI / Figma / Affinity / Adobe Indesign / Adobe Illustrator</p>
        </li>

        <li class="gallery-details section-2">
            <h2 class="gallery-title">Frameworks</h2>
            <p>Astro / Sveltekit / 11ty / Nuxt JS</p>
        </li>

        <li class="gallery-details section-3">
            <h2 class="gallery-title">Webdevelopment</h2>
            <p>HTML / CSS / JavaScript / GSAP / NodeJS</p>
        </li>        
    </ul>
</nav>

<style>
    nav {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

   .gallery {
        display: grid;
        grid-template-columns: 1fr;
        position: sticky;
        top: 0;
        height: 100vh;
        display: grid;
        width: 50vw;
        gap: 1rem;
        padding: 1rem;
        align-content: center;
        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }

    .gallery img {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(1);
        transition: filter 0.3s ease;
        margin: 0 auto;
        animation: activate-image 0.15s ease-in-out both;
    }

    @keyframes activate-image {
        0% {
            filter: grayscale(1);
            scale: 0.8;
        }
        100% {
            filter: grayscale(0);
            rotate: -0.3deg;
        }
    }

    .gallery-item {
        max-width: 20em;
    }

    .gallery-details {
	    display: flex;
	    flex-direction: column;
	    justify-content: center;
        height: 100vh;
	    padding: 2rem;
    }

    .section-1 {
        view-timeline-name: --sec1;
        view-timeline-axis: block;
        @supports (timeline-trigger: --sec1 view()) { /*https://developer.chrome.com/blog/scroll-triggered-animations*/
            timeline-trigger: --sec1 view() entry calc(0% + 20em) exit calc(0% + 20em);
        }
    }

    .section-2 {
        view-timeline-name: --sec2;
        view-timeline-axis: block;
        @supports (timeline-trigger: --sec2 view()) {
            timeline-trigger: --sec2 view() entry calc(0% + 20em) exit calc(0% + 20em);
        }
    }

    .section-3 {
        view-timeline-name: --sec3;
        view-timeline-axis: block;
        @supports (timeline-trigger: --sec3 view()) {
            timeline-trigger: --sec3 view() entry calc(0% + 20em) exit calc(0% + 20em);
        }
    }

    .image-1 {
        animation-trigger: --sec1 play-forwards play-backwards;
    }
    .image-2 {
        animation-trigger: --sec2 play-forwards play-backwards;
    }
    .image-3 {
        animation-trigger: --sec3 play-forwards play-backwards;
    }

    h2, p {
        font-family: var(--font-text);
        color: var(--neutral-color-white);
        font-size: var(--font-size-xxl);
    }

    h2 {
        font-weight: 700;
    }
</style>