<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import ListsRow from '../components/lists/ListsRow.vue';
import SubmitButton from "../components/buttons/SubmitButton.vue";

const route = useRoute();
const participantCount = ref();
const tournament = ref({});

async function saveTournament(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    tournament.value.directMatchesCount = form.direct_matches_count.value;
    tournament.value.winPoints = form.win_points.value;
    tournament.value.drawPoints = form.draw_points.value;
    tournament.value.losePoints = form.loss_points.value;
    tournament.value.scoreTieResolution = form.score_tie_resolution.value;
    tournament.value.stages = [{
        number: 1,
        matches: permuteMatches(tournament.value.participants)
    }];

    await axios.put('http://localhost:8000/competitions/' + tournament.value._id, tournament.value,
    {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
            .then(response => {
                if(tournament.value.type === "Liga")
                {
                    window.location.href = '/tournament/leaguepage/' + tournament.value._id;
                }
                else
                {
                    window.location.href = '/bracket/' + tournament.value._id;
                }
            })
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

function permuteMatches(participants)
{
    var matches = [];
    for(let i = 0; i < participants.length; i++)
    {
        for(let j = i+1; j < participants.length; j++)
        {
            let match = {
                participantOne: participants[i]._id,
                participantTwo: participants[j]._id,
            };
            matches.push(match);
        }
    }
    return matches;
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
            <h3>Uczestnicy:</h3>
            <div class="scroll_wrapper">
                <div class="tc_participant" v-for="participant in tournament.participants">
                    {{ participant["name"] }}
                </div>
            </div>
        </article>
        <aside>
            <form id="form1" @submit="saveTournament">
                <IntegerField
                    label="Liczba uczestników"
                    name="participant_count"
                    :max="12"
                    :min="0"
                    :value="getParticipantCount()"
                    disabled
                />
                <DropdownList
                    :items="[tournament.type]"
                    :selected="1"
                    name="type"
                    placeholder="Typ turnieju"
                    disabled
                />
                <IntegerField
                    label="Mecze bezpośrednie"
                    name="direct_matches_count"
                    :max="2"
                    :min="1"
                    :value="1"
                    required
                />
                <IntegerField
                    label="Punkty za wygraną"
                    name="win_points"
                    :max="99"
                    :min="0"
                    :value="3"
                    required
                    :disabled="tournament.type === 'Play-off'"
                />
                <IntegerField
                    label="Punkty za remis"
                    name="draw_points"
                    :max="99"
                    :min="-99"
                    :value="1"
                    required
                    :disabled="tournament.type === 'Play-off'"
                />
                <IntegerField
                    label="Punkty za przegraną"
                    name="loss_points"
                    :max="99"
                    :min="-99"
                    :value="0"
                    required
                    :disabled="tournament.type === 'Play-off'" 
                />
                <DropdownList
                    name="score_tie_resolution"
                    :items="['Bilans bramkowy', 'Losowo']"
                    placeholder="W przypadku remisu punktowego decyduje:"
                    required
                />
                <SubmitButton label="Przejdź do drabinki" />
            </form>
        </aside>
    </main>
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

    width: 40%;
    min-width: 300px;
    height: 400px;

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

    width: 60%;
    min-width: fit-content;
    height: 400px;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

form
{
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    width: 100%;
}

.scroll_wrapper
{
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 0px 7.5px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.tc_participant
{
    display: flex;

    place-items: center;
    place-content: center;

    min-width: fit-content;

    padding: 7.5px 15px;
    margin: 4px;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

</style>
