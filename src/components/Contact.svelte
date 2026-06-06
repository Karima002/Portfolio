<script>
    import { t, locale, locales } from "$lib/i18n";
</script>

<section>
    <h1>Karima Mouadi</h1>
    <h2 class="name-second">Karima Mouadi</h2>
    <h2 class="function">{@html $t("homepage.function")}</h2>
</section>

<p>{$t("contact-description")}</p>

<nav>
    <a href="https://www.linkedin.com/in/karima-m-ab63a11b3">[LinkedIn]</a>
    <a href="https://github.com/Karima002">[GitHub]</a>
    <a href="mailto:km.mouadi@gmail.com">[{$t("email")}]</a>
</nav>

<style>
    :global(body) {
        background-color: black;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

     h1, .function {
        color: var(--neutral-color-white);
        font-size: clamp(var(--font-size-xxl), 10vw, var(--font-size-heading));
        font-family: var(--font-text);

    }

    h1, .function {
        color: var(--neutral-color-white);
    }

    .name-second {
        color: var(--accent-color-darkgreen);
        font-family: var(--font-text);
        font-size: clamp(var(--font-size-xxl), 10vw, var(--font-size-heading));
        padding: .4em;
        z-index: -1;
        transform: translateY(-1.4em); 
        opacity: .7em;
    }

    p {
        color: var(--neutral-color-white);
        font-family: var(--font-text);
        font-size: clamp(var(--font-size-xl), 5vw, var(--font-size-xxl));
        text-align: center;
        padding: 3em;
    }

    nav {
        display: flex;
        justify-content: center;
        gap: 2em;
    }
</style>