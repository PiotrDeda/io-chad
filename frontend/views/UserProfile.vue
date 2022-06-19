<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';</script>

<template>
    <!--

        WORK IN PROGRES
    -->
    <TopPanel/>
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych
            krokach!</h3>
    </header>

    <main>
        <h3 id="name">Witaj Użytkowniku !</h3>
        <LinkButton label="Strona zmiany hasła" link="/changepassword"/>
        <LinkButton label="Generator turnieju" link="/tournamentcreator"/>
        <LinkButton label="Statystyki" link=""/>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

#name {
    color: var(--color-valid-input);
    text-align: center;

}

main {
    display: block;
}
</style>
