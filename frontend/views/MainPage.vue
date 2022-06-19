<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import TextField from '../components/input_fields/TextField.vue';
</script>

<template>
    <TopPanel/>
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych
            krokach!</h3>
    </header>

    <main>
        <TextField label="Nazwa turnieju"/>
        <TextField label="Typ gry"/>
        <DropdownList :items="['play-off', 'liga']" placeholder='Typ turnieju'/>
        <IntegerField label="Liczba uczestników" max="100" min="0"/>
        <LinkButton id="submit_button" label="Generuj" link="/tc"/>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

main {
    display: block;
}
</style>
