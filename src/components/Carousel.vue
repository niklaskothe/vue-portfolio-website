<script>
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}
</script>

<template>
    <div class="scroller" data-direction="left" data-speed="fast">
        <ul class="tag-list scroller__inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>SSG</li>
            <li>webdev</li>
            <li>animation</li>
            <li>UI/UX</li>
        </ul>
    </div>
</template>

<style>
.tag-list {
    margin: 0;
    padding-inline: 0;
    list-style: none;
}

.tag-list li {
    padding: 1rem;
    background: cornflowerblue;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem -0.25rem black;
}

.scroller {
    max-width: 600px;
    outline: 3px solid lime;
}

.scroller__inner {
    padding-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.scroller[data-animated="true"] {
    overflow: hidden;

    -webkit-mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
    mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
    width: fit-content;
    flex-wrap: nowrap;
    animation: 
        scroll 
        var(--_animation-duration, 40s) 
        var(--_animation-direction, forwards)
        linear 
        infinite;
}

.scroller[data-direction="right"] {
    --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
    --_animation-direction: forwards;
}

.scroller[data-speed="slow"] {
    --_animation-duration: 120s;
}

.scroller[data-speed="fast"] {
    --_animation-duration: 20s;
}


@keyframes scroll {
    to {
        transform: translate(calc(-50% - 0.5rem));
    }
}
</style>