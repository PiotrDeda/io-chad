<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
</script>

<template>
    <TopPanel />
    <header>
        <h1>Kreator Turnieju</h1>
        <h1>Kreator Turnieju</h1>
    </header>

    <main>
        
    </main>
</template>

<style>
@import '../assets/base.css';

body
{
    place-items: center;
    /* border: solid 2px white; */
}

#app
{
    position: absolute;
    top: 50px;

    margin: 0;
    padding: 0;

    width: 100%;
    min-height: calc(var(inherit) - 50px);

    font-weight: normal;
    border: solid 2px red;
}

header
{
    text-align: center;
    border: solid 1px white;
}

h1
{
    justify-content: center;
    border: solid 1px white;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

/* @media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }

    #app {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }

    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    .logo {
        margin: 0 2rem 0 0;
    }
} */
</style>
