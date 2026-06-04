<script>
    import Header from '../../components/Header.svelte';
</script>

<Header />
<section>
    <h1>Karima Mouadi</h1>
    <h2 class="name-second">Karima Mouadii</h2>
    <h2 class="function">Frontend Developer and Designer</h2>
</section>

<p>I’m Karima, a frontend designer and developer based in Amsterdam. Specializing in building modern and user-friendly websites. With a strong focus on detail and accessibility I transform ideas into powerful digital experiences. As a master’s degree student in International Technology law and Internet law & IE I also build websites in compliance with current European and International legislation. Combining creativity with research, I create websites that align with the needs of end-users</p>

<nav>
    <a href="https://www.linkedin.com/in/karima-m-ab63a11b3">[LinkedIn]</a>
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