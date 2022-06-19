<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
</script>

<template>
<!--

    WORK IN PROGRES
-->
    <TopPanel />
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych krokach!</h3>
    </header>

    <body>
        <h3 id="imie">Witaj Użytkowniku !</h3>
        <LinkButton label ="Strona zmiany hasła" link ="/passwd" />
        <LinkButton label ="Generator turnieju" link ="/tc" />
        <LinkButton label ="Statystyki" link =""/>
    </body>
</template>

<style scoped>
@import '../assets/base.css';
#imie{
     color: var(--color-valid-input);
  text-align: center;
    
}
</style>
