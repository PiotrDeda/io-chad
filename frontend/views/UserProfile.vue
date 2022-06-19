<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import TopPanel from '../components/panels/TopPanel.vue';
import BaseButton from "../components/buttons/BaseButton.vue";
import LinkButton from '../components/buttons/LinkButton.vue'

const account = ref({});
const tournaments = ref([]);
const key = ref(0);

async function deleteTournament(id) {
    if(confirm("Czy na pewno chcesz usunąć turniej?"))
        await axios.delete('http://localhost:8000/competitions/' + id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
            .then(response => {
                alert(response.data.message);
                getCompetitions();
            })
            .catch(error => {
                console.log(error);
                if (error.response.data.message)
                    alert(error.response.data.message);
                else if (error.response.data.err)
                    alert(error.response.data.err);
            })
}

async function getCompetitions() {
    await axios.get('http://localhost:8000/competitions', {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (tournaments.value = response.data.competitions))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
}

onMounted(async () => {
    await axios.get('http://localhost:8000/accounts/profile', {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (account.value = response.data))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
    await getCompetitions();
})

</script>

<template>
    <TopPanel/>

    <main>
        <h3 id="name">Witaj {{ account.login }}!</h3>
        <LinkButton label="Zmiana hasła" link="/changepassword"/>
    </main>

    <div id="tournaments">
        <h3>Twoje turnieje</h3>
        <div v-for="tournament in tournaments">
            <LinkButton :label="tournament.name" :link="`/tournament/${tournament._id}`"/>
            <LinkButton label="Edytuj" :link="`/tournament/edit/${tournament._id}`"/>
            <BaseButton label="Usuń" @click="deleteTournament(tournament._id)"/>
        </div>
    </div>
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
