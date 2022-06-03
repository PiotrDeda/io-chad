<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
</script>

<template>
    <TopPanel />
    <header>
        <div class="wrapper">
            <div class="greetings">
                <h1 class="blue">CHAD Competition Hub Administration & Design</h1>
                <h3>
                    Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych krokach !
                </h3>
            </div>
        </div>
    </header>

    <main>
        <baseItem>
            <template #heading>Nazwa turnieju</template>
            <input :value="text">
        </baseItem>

        <baseItem>
            <template #heading>Gra</template>
            <input :value="text">
        </baseItem>

        <baseItem>
            <template #heading>Typ turnieju</template>
            <DropdownList :items ="['play-off', 'liga']" placeholder ='Typ turnieju'/>
        </baseItem>

        <baseItem>
            <template #heading>Podaj liczbę uczestników</template>
            <input type="number" name="liczba_uczestnikow">
        </baseItem>

        <baseItem>
            <template #heading>Uczestnicy (jeden uczestnik w jednej linii)</template>
            <ElementsList /> 
        </baseItem>  

        <baseItem>
            <LinkButton id="submit_button" label="GENERUJ!" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </baseItem>
    </main>
</template>

<style>
@import '../assets/base.css';

#app
{
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--vt-c-black);
    color: var(--vt-c-text-dark-1);
    font-weight: normal;
}

#submit_button
{
    background-color: var(--vt-c-black);
    border: none;
    color: var(--vt-c-text-dark-1);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

header
{
    line-height: 1.5;
}

h1
{
    margin-top: 20px;
    font-weight: 500;
    font-size: 2.6rem;
    top: 10px;
}

h3
{
    margin :auto;
    font-size: 1.2rem;
}

.greetings h1,
.greetings h3
{
    text-align: center;
}

@media (min-width: 1024px)
{
    .greetings h1,
    .greetings h3
    {
        text-align: left;
    }

    body
    {    
        background-color: var(--color-background-soft);
        display: flex;
        place-items: center;
    }

    #app
    {
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }

    header
    {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper
    {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

</style>
