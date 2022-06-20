<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import TopPanel from "./TopPanel.vue";
import TextField from '../../components/input_fields/TextField.vue';
import SubmitButton from "../../components/buttons/SubmitButton.vue";

const route = useRoute();
const tournament = ref({});

async function edit(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    tournament.value.name = form.name.value;
    tournament.value.game = form.game.value;

    await axios.put('http://localhost:8000/competitions/' + route.params.id, tournament.value, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (window.location.href = '/profile'))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
}

onMounted(async () => {
    await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (tournament.value = response.data.competition))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
})
</script>

<template>
    <TopPanel/>

    <header>
        <div class="wrapper">
            <h1>Edytuj turniej {{ tournament.name }}</h1>
        </div>
    </header>

    <main>
        <form id="form1" @submit="edit">
            <TextField :value="tournament.name" label="Nazwa turnieju" name="name"/>
            <TextField :value="tournament.game" label="Typ gry" name="game"/>
            <SubmitButton id="submit_button" label="Edytuj"/>
        </form>
    </main>
</template>

<style scoped>
@import '../../assets/base.css';

main {
    margin: 0px;
    padding: 9px 15px;
    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

form {
    display: flex;
    flex-direction: column;

    place-items: center;
}
</style>
