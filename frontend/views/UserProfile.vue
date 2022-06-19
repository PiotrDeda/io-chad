<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';

const account = ref({});
const tournaments = ref([]);

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
    await axios.get('http://localhost:8000/competitions', {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (tournaments.value = response.data.competitions))
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

    <main>
        <h3 id="name">Witaj {{ account.login }}!</h3>
        <LinkButton label="Strona zmiany hasła" link="/changepassword"/>
        <LinkButton label="Statystyki" link=""/>
    </main>

    <div id="tournaments">
        <h3>Twoje turnieje</h3>
        <div v-for="tournament in tournaments">
            <LinkButton :label="tournament.name" :link="`/tournament/${tournament._id}`"/>
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
