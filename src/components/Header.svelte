<header>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        
        <li>
            <a href="/projects">[Projects]</a>
        </li>

        <li>
            <a href="/contact">[Contact me]</a>
        </li>
    </ul>
</header>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
        @media (min-width: 768px) {
            list-style: none;
            justify-content: space-evenly;
            gap: 10em;
            flex-direction: row;
        }
    }

    a {
        text-decoration: none;
        font-family: var(--font-text);
        font-size: var(--font-size-xl);
        color: var(--neutral-color-white);
        font-weight: 100;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline;
            text-decoration-thickness: 1px;
            text-underline-offset: .3em;
            cursor: pointer;
        }
    }

</style>