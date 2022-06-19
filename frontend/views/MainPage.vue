<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import TextField from '../components/input_fields/TextField.vue';
import SubmitButton from "../components/buttons/SubmitButton.vue";
import axios from "axios";

async function generate(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    await axios.post('http://localhost:8000/competitions', {
        name: form.name.value,
        game: form.game.value,
        type: form.type.value,
    }, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (window.location.href = '/tournamentcreator/' + response.data._id))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
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
            <TextField label="Nazwa turnieju" name="name"/>
            <TextField label="Typ gry" name="game"/>
            <DropdownList :items="['play-off', 'liga']" name="type" placeholder='Typ turnieju'/>
            <SubmitButton id="submit_button" label="Generuj"/>
        </form>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

main {
    display: block;
}
</style>
