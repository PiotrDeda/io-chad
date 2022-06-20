<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import DropdownList from '../../components/lists/DropdownList.vue';
import TextField from '../../components/input_fields/TextField.vue';
import SubmitButton from "../../components/buttons/SubmitButton.vue";

const route = useRoute();
const tournament = ref({});

async function edit(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    tournament.value.name = form.name.value;
    tournament.value.game = form.game.value;
    tournament.value.type = form.type.value;

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
    <main>
        <form id="form1" @submit="edit">
            <TextField label="Nazwa turnieju" name="name"/>
            <TextField label="Typ gry" name="game"/>
            <DropdownList :items="['play-off', 'liga']" name="type" placeholder='Typ turnieju'/>
            <SubmitButton id="submit_button" label="Edytuj"/>
        </form>
    </main>
</template>

<style scoped>
@import '../../assets/base.css';

main {
    display: block;
}
</style>
