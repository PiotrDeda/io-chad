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

    <header>
        <h1 id="up_greetings">Witaj {{ account.login }}!</h1>
    </header>

    <main>
        <article id="up_tournaments">
            <h3>Twoje turnieje</h3>
            <table>
                <tr v-for="tournament in tournaments">
                    <td class="column_tour_name">
                        <LinkButton v-if="tournament.type === 'Play-off'" style="width: 90%; min-width: fit-content;" :label="tournament.name" :link="`/bracketview/${tournament._id}`"/>
                        <LinkButton v-if="tournament.type === 'Liga'" style="width: 90%; min-width: fit-content;" :label="tournament.name" :link="`/tournament/leaguepage/${tournament._id}`"/>
                    </td>
                    <td><LinkButton label="Edytuj" :link="`/tournament/edit/${tournament._id}`"/></td>
                    <td><BaseButton label="Usuń" @click="deleteTournament(tournament._id)"/></td>
                </tr>
            </table>
        </article>
        <article id="up_settings">
            <h3>Ustawienia</h3>
            <LinkButton label="Zmiana hasła" link="/changepassword"/>
        </article>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

#up_greetings
{
    color: var(--color-valid-input);
    text-align: center;
}

main
{
    flex-direction: column;
    width: 40%;
    min-width: fit-content;
}

article
{
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;

    width: 100%;
    min-width: fit-content;
    min-height: fit-content;

    margin: 15px 0px;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
}

article h3
{
    text-align: center;
    width: 100%;
    padding: 15px;

    border-width: 0px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 0px;
    border-bottom-width: 1px;
}

td, tr
{
    text-align: center;
    padding: 0px;
    margin: 0px;
}

table
{
    padding: 7.5px 0px;
    min-width: fit-content;
}

.column_tour_name
{
    min-width: fit-content;
    width: 70%;
}
</style>
