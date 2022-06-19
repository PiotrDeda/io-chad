<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import ListsRow from '../components/lists/ListsRow.vue';
import LinkButton from "../components/buttons/LinkButton.vue";

const route = useRoute();
const participantCount = ref();
const tournament = ref({});

onMounted(async () => {
    await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => {
            tournament.value = response.data.competition;
            participantCount.value = Object.keys(response.data.competition.participants).length;
        })
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
})

function getParticipantCount()
{
    return participantCount.value;
}
</script>

<template>
    <TopPanel/>
    <header>
        <h1>Kreator Turnieju</h1>
        <h2>{{ tournament.name }}</h2>
    </header>

    <main>
        <article>
            <ElementsList height="100%" width="100%">
                <div v-for="participant in tournament.participants">
                    {{ participant["name"] }}
                </div>
            </ElementsList>
        </article>
        <aside>
            <IntegerField label="Liczba uczestników" :max="12" :min="0" :value="getParticipantCount()" disabled/>
            <DropdownList :items="[tournament.type]" :selected="1" name="type" placeholder="Typ turnieju" disabled />
            <IntegerField label="Mecze bezpośrednie" :max="2" :min="1" :value="1"/>
            <IntegerField label="Punkty za wygraną" :max="99" :min="0" :value="3"/>
            <IntegerField label="Punkty za remis" :max="99" :min="-99" :value="1"/>
            <IntegerField label="Punkty za przegraną" :max="99" :min="-99" :value="0"/>
            <DropdownList
                :items="['Bilans bramkowy', 'Losowo']"
                placeholder="W przypadku remisu punktowego decyduje:"
            />
        </aside>
    </main>
    <LinkButton label="Drabinka" :link="`/bracket/${tournament._id}`"/>
</template>

<style scoped>
@import '../assets/base.css';

article
{
    display: flex;
    flex-direction: column;

    place-items: center;

    padding: 15px;
    margin-right: 7.5px;

    width: 70%;
    min-width: fit-content;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

aside
{
    display: flex;
    flex-direction: column;

    place-items: center;

    padding: 15px;
    margin-left: 7.5px;

    width: calc(30% - 45px);
    min-width: fit-content;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

</style>
