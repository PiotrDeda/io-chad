<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import TextField from '../components/input_fields/TextField.vue';
import SubmitButton from "../components/buttons/SubmitButton.vue";
import MultipleTextField from '../components/input_fields/MultipleTextField.vue';

import axios from "axios";

async function generate(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    const parsedTeams = parseTeams(form.teams.value);

    await axios.post('http://localhost:8000/competitions', {
        name: form.name.value,
        game: form.game.value,
        type: form.type.value,
        participants: parsedTeams
    },
    {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
            .then(response => (
                window.location.href = '/tournament/creator/' + response.data._id
            ))
            .catch(error => {
                console.log(error);
                if (error.response.data.message)
                    alert(error.response.data.message);
                else if (error.response.data.err)
                    alert(error.response.data.err);
            })
}

function parseTeams(teams)
{
    console.log(teams);
    var json = JSON.parse(teams);
    var result = [];

    for(let team of json)
    {
        let tmp = { "name": team };
        result.push(tmp);
    }

    return result;
}

</script>

<template>
    <TopPanel/>
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych
            krokach!</h3>
    </header>

    <main>
        <form id="form1" @submit="generate">
            <TextField label="Nazwa turnieju" name="name" />
            <TextField label="Typ gry" name="game" />
            <DropdownList :items="['Play-off', 'Liga']" name="type" placeholder="Typ turnieju" />
            <MultipleTextField placeholder="Brak uczestników" tooltip="Dodaj uczestników:" />
            <SubmitButton label="Generuj" />
        </form>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

main
{
    margin: 0px;
    padding: 9px 15px;
    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

form
{
    display: flex;
    flex-direction: column;

    place-items: center;
}
</style>
