<div class="scroll-bar"></div>

<style>
    .scroll-bar {
        @media (prefers-reduced-motion: no-preference) {
            height: .8em;
            position: fixed;
            top: 0;
            background-color: var(--accent-color-darkgreen);
            width: 100%;
            z-index: 1;
            transform-origin: left;
            scale: 0 1;

            animation: scroll linear;
            animation-timeline: scroll(y);
        }
    }

    @keyframes scroll {
        to {
            scale: 1 1;
        }
    }

</style>