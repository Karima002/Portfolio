<script>
    import { t, locale, locales } from "$lib/i18n";
</script>

<header>
    <ul>
        <li>
            <a href="/">[Home]</a>
        </li>
        
        <li>
            <a href="/projects">[Projects]</a>
        </li>

        <li>
            <a href="/contact">[Contact me]</a>
        </li>

        <li>
            <select bind:value={$locale}>
            {#each locales as l}
                <option value={l}>{l}</option>
            {/each}
            </select>
        </li>
    </ul>
</header>

<style>
    ul {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 2em;
        @media (min-width: 768px) {
            list-style: none;
            justify-content: space-evenly;
            gap: 10em;
            flex-direction: row;
        }
    }

</style>