<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import Draggable from '../components/draggable/Draggable.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import DropZone from '../components/draggable/DropZone.vue';
import { onMounted, ref } from 'vue';
import axios from "axios";
import {useRoute} from "vue-router";
import BaseButton from '../components/buttons/BaseButton.vue';

const route = useRoute();
const tournament = ref({});
const pairs = ref([]);
const comps = ref([])

function loadPairs() {
    for (let i = 1; i < 1 + comps.value.length / 2; i++) {
        pairs.value.push({pair_id: i, home_id: i * 2, away_id: i * 2 + 1});
    }
}

function onDrop(event, list, limit) {
    const new_name = event.dataTransfer.getData('item');
    const new_item = comps.value.find((it) => it.name === new_name);
    if (getTeams(list).length >= limit)
        return;
    new_item.list = list;
}

function getTeams(list) {
    return comps.value.filter((it) => it.list === list);
}

function resetLayout() {
    comps.value.forEach((it) => it.list = 1);
}

async function saveBracket() {
    const matches = [];
    let matchNumber = 1;
    for (const pair of pairs.value) {
        matches.push({
            participantOne: getTeams(pair.home_id)[0].id,
            participantTwo: getTeams(pair.away_id)[0].id,
            number: matchNumber++,
        });
    }
    tournament.value.stages = [{number: 1, matches: matches}];
    let num = 2;
    for (let i = matches.length / 2; i > 0; i /= 2) {
        if (matches.length === 1)
            break;

        tournament.value.stages.push({number: num++, matches: []});
        for (let j = 0; j < i; j++) {
            tournament.value.stages[num-2].matches.push({number: matchNumber++});
        }
        if (i <= 1)
            break;
    }

    await axios.put('http://localhost:8000/competitions/' + tournament.value._id, tournament.value,
    {
        headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (
            window.location.href = '/bracketview/' + tournament.value._id
        ))
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
    comps.value = tournament.value.participants.map((it) => ({name: it.name, list: 1, id: it._id}));
    loadPairs();
})
</script>

<template>
    <TopPanel/>
    <header>
        <h1> {{ tournament.name }} </h1>
        <h3> Kreator drabinki turniejowej </h3>
    </header>

    <main>
        <article>
            <div class="play_off_title">Uczestnicy</div>
            <div class="scroll_wrapper">
                <DropZone id="team_selector" :items="getTeams(1)" placeholder="Brak uczestników" @drop="onDrop($event, 1)">
                    <Draggable v-for="it in getTeams(1)" :item="it.name"></Draggable>
                </DropZone>
            </div>
        </article>

        <aside>
            <div class="scroll_wrapper">
                <div class="vertical_direction">
                    <div v-for="pair in pairs" class="play_off">
                        <div class="play_off_title">Para {{ pair.pair_id }}</div>
                        <div class="play_off_teams">
                            <DropZone placeholder="Przeciągnij tutaj uczestnika" :items="getTeams(pair.home_id)" @drop="onDrop($event, pair.home_id, 1)">
                                <Draggable v-for="it in getTeams(pair.home_id)" :item="it.name"></Draggable>
                            </DropZone>

                            <div class="separator">-</div>

                            <DropZone placeholder="Przeciągnij tutaj uczestnika" :items="getTeams(pair.away_id)" @drop="onDrop($event, pair.away_id, 1)">
                                <Draggable v-for="it in getTeams(pair.away_id)" :item="it.name"></Draggable>
                            </DropZone>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </main>
    <div id="bd_bottom_panel">
        <BaseButton @click="resetLayout" label="Resetuj układ" />
        <BaseButton @click="saveBracket" label="Zapisz układ" />
    </div>
</template>

<style scoped>
@import '../assets/base.css';

main
{
    width: 40%;
}

article
{
    display: flex;
    flex-direction: column;
    place-items: center;

    width: 30%;
    height: 400px;
    min-width: fit-content;

    margin-right: 7.5px;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
}

aside
{
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;

    width: 70%;
    height: 400px;

    margin-left: 7.5px;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
}

.scroll_wrapper
{
    display: flex;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.vertical_direction
{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.play_off
{
    width: 100%;
}

.play_off_teams
{
    display: flex;
    place-items: center;

    margin: 10px;
    padding: 20px;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border-hover);
    border-radius: 6px;
}

.play_off_title
{
    font-size: 24px;
    text-align: center;
    color: var(--color-heading);
    margin: 10px;
}

.separator
{
    display: flex;
    place-content: center;

    font-size: 52px;
    text-align: center;
}

#team_selector
{
    display: flex;
    place-items: center;
    place-content: center;

    width: 100%;
    height: fit-content;

    border-width: 0px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 0px;
    border-top-width: 1px;
}

#team_listing
{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#bd_bottom_panel
{
    display: flex;
    place-content: center;

    margin: 15px 0px;
}

</style>