<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import TextField from '../components/input_fields/TextField.vue';
</script>

<template>
    <TopPanel />
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych krokach!</h3>
    </header>

    <body>
        <TextField label="Nazwa turnirju"/>
        <TextField label="Gra"/>
        <DropdownList :items ="['play-off', 'liga']" placeholder ='Typ turnieju'/>
        <IntegerField label="Liczba uczestników" min="0" max="100"/>
            <ElementsList /> 
            <LinkButton id="submit_button" label="Generuj" link="/tc" />
       
    </body>
</template>

<style scoped>
@import '../assets/chadTheme.css';
</style>
