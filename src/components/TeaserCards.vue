<template>
    <div class="cardContainer">
        <div id="card1" class="card">
            <div class="cardBody">
                <h2 class="cardTitle">Etwas tolles</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
                <a href="#" class="button">Mehr erfahren</a>
            </div>
        </div>
        <div id="card2" class="card">
            <div class="cardBody">
                <h2 class="cardTitle">Etwas spannendes</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
                <a href="#" class="button">Mehr erfahren</a>
            </div>
        </div>
        <div id="card3" class="card">
            <div class="cardBody">
                <h2 class="cardTitle">Etwas interessantes</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
                <a href="#" class="button">Mehr erfahren</a>
            </div>
        </div>
        <div id="card4" class="card">
            <div class="cardBody">
                <h2 class="cardTitle">Etwas lustiges</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat odio pariatur doloribus sint?</p>
                <a href="#" class="button">Mehr erfahren</a>
            </div>
        </div>
    </div>
</template>

<style>
.cardContainer {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
}

#card1 {
    background-image: url(../../public/img/baum.jpg);
}

#card2 {
    background-image: url(../../public/img/mischpult.jpg);
}

#card3 {
    background-image: url(../../public/img/lightroom.jpg);
}

#card4 {
    background-image: url(../../public/img/pinsel.jpg);
}


.card {
    flex: 24%;
    max-width: 25%;
    margin: 4px;
    padding: clamp(1.5rem, 20vh, 10rem) 0 0;
    color: white;
    transition: transform ease 250ms;
    overflow: hidden;
}

.card:hover {
    transform: scale(1.05);
}

.cardBody {
    padding: 1.5rem;
    background: linear-gradient(rgb(0 0 0 / 0),
            rgb(0 0 0 / 0.25) 15%,
            rgb(0 0 0 / 1));
}

.cardBody p {
    color: hsl(0deg 50% 100% / 0.8);
    margin-bottom: 1.25em;
}

@media (hover: hover),
(prefers-reduced-motion: no-preference) {
    .cardBody {
        transform: translateY(60%);
        transition: transform 500ms ease;
    }

    .card:hover .cardBody {
        transform: translateY(0);
        transition-delay: 500ms;
    }

    .cardBody>*:not(.cardTitle) {
        opacity: 0;
        transition: opacity 1200ms linear 400ms;
    }

    .card:hover .cardBody>*:not(.cardTitle) {
        opacity: 1;
    }

    .cardTitle::after {
        content: "";
        position: absolute;
        left: -1.5rem;
        top: 100%;
        height: 3px;
        width: calc(100% + 1.5rem);
        background: var(--color-highlight);
        transform: scaleX(0);
        transition: transform 200ms ease;
        transform-origin: left;
    }

    .card:hover .cardTitle::after {
        transition: transform 500ms ease;
        transform: scaleX(1);
    }
}


.cardTitle {
    position: relative;
    width: max-content;
}

@media screen and (max-width: 1000px) {
    .card {
        flex: 46%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .card {
        flex: 100%;
        max-width: 100%;
    }
}
</style>