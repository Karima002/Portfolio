<script>
    import Header from '../../components/Header.svelte';
</script>

<Header />
<section>
    <h1>Karima Mouadi</h1>
    <h2>Frontend Developer and Designer</h2>
</section>

<p>I’m Karima, a frontend designer and developer based in Amsterdam. Specializing in building modern and user-friendly websites. With a strong focus on detail and accessibility I transform ideas into powerful digital experiences. As a master’s degree student in International Technology law and Internet law & IE I also build websites in compliance with current European and International legislation.</p>

<nav>
    <a href="https://www.linkedin.com/in/karimamouadi/">[LinkedIn]</a>
    <a href="https://github.com/Karima002">[GitHub]</a>
    <a href="mailto:km.mouadi@gmail.com">[Email]</a>
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
        gap: .5em;
    }

     h1, h2 {
        color: var(--neutral-color-white);
        font-family: var(--font-title);
        font-size: clamp(var(--font-size-xxl), 10vw, var(--font-size-heading));
        font-family: var(--font-text);

    }

    h1, h2 {
        color: var(--neutral-color-white);
    }

    p {
        color: var(--neutral-color-white);
        font-family: var(--font-text);
    }
</style>