<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/test_input_fields/IntegerField.vue';
</script>

<template>
    <TopPanel />
    <header>
        <h1>Kreator Turnieju</h1>
    </header>

    <main>
        <article>

        </article>
        <aside>
            <IntegerField label="Liczba uczestników" min="0" max="12" value="4" />
            <IntegerField label="Mecze bezpośrednie" min="0" max="4" value="2" />
            <IntegerField label="Liczba grup" min="0" max="20" value="2" />
            <IntegerField label="Punkty do bezpośredniego awansu" min="0" max="99" value="2" />
            <IntegerField label="Punkty do baraży" min="0" max="99" value="2" />
            <IntegerField label="Punkty do awansu warunkowego*" min="0" max="99" value="2" />
            <IntegerField label="Punkty za wygraną" min="0" max="99" value="3" />
            <IntegerField label="Punkty za remis" min="-99" max="99" value="1" />
            <IntegerField label="Punkty za przegraną" min="-99" max="99" value="0" />
        </aside>
    </main>
</template>

<style>
@import '../assets/base.css';

body
{
    place-items: center;
}

#app
{
    display: flex;
    flex-direction: column;
    
    justify-content: flex-start;
    align-items: center;

    position: absolute;

    margin: 0;
    padding: 0;
    padding-top: 50px;

    width: 100%;
    min-height: inherit;

    font-weight: normal;
    /* border: solid 2px red; */
}

header
{
    text-align: center;
}

h1
{
    justify-content: center;
}

main
{
    display: flex;

    min-height: fit-content;
    width: inherit;

    /* border: solid 1px red; */
}

article
{
    width: 70%;
}

aside
{
    /* border: solid 1px white; */
    padding: 15px;
    margin: 15px;
    width: min(30%, fit-content);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

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
