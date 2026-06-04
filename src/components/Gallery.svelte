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
            <p>HTML / CSS / GSAP / NodeJS</p>
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
        grid-template-columns: 1fr 1fr;
        position: sticky;
        top: 0;
        height: 100vh;
        display: grid;
        width: 50vw;
        gap: 1rem;
        padding: 1rem;
        align-content: center;
    }

    .gallery img {
        width: min(100%, 100vh);
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

    
</style>