<script>
    import figma from '$lib/assets/figma.jpg';
    import code from '$lib/assets/code.png';
    import frameworks from '$lib/assets/frameworks.png';
    import figmaWebp from '$lib/assets/figma.webp';
    import codeWebp from '$lib/assets/code.webp';
    import frameworksWebp from '$lib/assets/frameworks.webp';

    //Sveltekit i18n
    import { t, locale, locales } from "$lib/i18n";
</script>

<nav>
    <ul class="gallery">
        <li class="gallery-item">
            <picture>
                <source type="image/webp" srcset={figmaWebp}>
                <img class="image-1" src={figma} alt="A screenshot of the Figma logo showing a green, purple, red, orange and violet circle connected to each other" width="240" height="260" >
            </picture>
        </li>

        <li class="gallery-item">
            <picture>
                <source type="image/webp" srcset={frameworksWebp}>
                <img class="image-2" src={frameworks} alt="A screenshot of the frameworks logos sveltekit, astro, eleventy, nuxtjs" width="240" height="260" >
            </picture>
        </li>

        <li class="gallery-item">
            <picture>
                <source type="image/webp" srcset={codeWebp}>
                <img class="image-3" src={code} alt="White coding symbol </>" width="240" height="260" >
            </picture>
        </li>
    </ul>

    <ul>
        <li class="gallery-details section-1">
            <h2 class="gallery-title">{$t("expertise-1")}</h2>
            <p>{$t("expertise-1-detail")}</p>
        </li>

        <li class="gallery-details section-2">
            <h2 class="gallery-title">{$t("expertise-2")}</h2>
            <p>{$t("expertise-2-detail")}</p>
        </li>

        <li class="gallery-details section-3">
            <h2 class="gallery-title">{$t("expertise-3")}</h2>
            <p>{$t("expertise-3-detail")}</p>
        </li>        
    </ul>
</nav>

<style>
    nav {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .gallery {
            display: grid;
            grid-template-columns: 1fr;
            position: sticky;
            top: 0;
            height: 100vh;
            display: grid;
            align-content: center;
            @media (min-width: 700px) {
                padding: 6em;

            }
        }

        .gallery img {
            width: 100%;
            height: auto;
            object-fit: cover;
            padding-left: 1em;
            filter: grayscale(1);
            transition: filter 0.3s ease;
            animation: activate-image 0.15s ease-in-out both;
        }
    }

    @keyframes activate-image {
        0% {
            filter: grayscale(1);
            scale: 0.7;
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
        font-size: var(--font-size-xl);
        @media (min-width: 700px) {
            font-size: var(--font-size-xxl);
        }
    }

    h2 {
        font-weight: 700;
    }
</style>