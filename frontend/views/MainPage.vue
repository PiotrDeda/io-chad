<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
</script>

<template>
    <TopPanel />
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych krokach!</h3>
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
            <IntegerField label="Liczba uczestników" min="0" max="100"/>
        </baseItem>

        <baseItem>
            <template #heading>Uczestnicy (jeden uczestnik w jednej linii)</template>
            <ElementsList /> 
        </baseItem>  

        <baseItem>
            <LinkButton id="submit_button" label="Generuj" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </baseItem>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

</style>
