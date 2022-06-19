<script setup type="module">
import TopPanel from '../components/panels/TopPanel.vue';
import BaseItem from '../components/baseItem.vue';
import EmailField from '../components/input_fields/EmailField.vue';
import PasswordField from '../components/input_fields/PasswordField.vue';
import LinkButtonVue from '../components/buttons/LinkButton.vue';
</script>

<template>
    <header>
        <TopPanel/>

        <div class="wrapper">
            <div class="greetings">
                <h1 class="blue">CHAD Competition Hub Administration & Design</h1>
                <h3>
                    Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych
                    krokach !
                </h3>
            </div>

            <h1>W celu zmiany hasła podaj nowy e-mail oraz nowe hasło</h1>
        </div>
    </header>

    <main>
        <BaseItem>
            <template #heading>Podaj login (e-mail)</template>
            <EmailField></EmailField>
        </BaseItem>
        <BaseItem>
            <template #heading>Podaj nowe hasło</template>
            <PasswordField></PasswordField>
        </BaseItem>
        <BaseItem>
            <template #heading>Potwierdź nowe hasło</template>
            <PasswordField></PasswordField>
        </BaseItem>
        <BaseItem>
            <LinkButtonVue id="change_passwd" label="ZMIEŃ !" link=""></LinkButtonVue>
        </BaseItem>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

main {
    display: block;
}

</style>
