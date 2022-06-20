<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import Draggable from '../components/draggable/Draggable.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import DropZone from '../components/draggable/DropZone.vue';
import {onMounted, ref} from 'vue';
import axios from "axios";
import {useRoute} from "vue-router";

const route = useRoute();
const tournament = ref({});
const amount = ref(0);
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
    amount.value = tournament.value.participants.length;
    comps.value = tournament.value.participants.map((it) => ({name: it.name, list: 1}));
    loadPairs();
})
</script>

<template>
    <TopPanel/>
    <header>
        <h1> {{ tournament.name }} </h1>
        <h3> Kreator drabinki turniejowej </h3>
    </header>

    <main id="main">
        <DropZone id="team_selector"
                  :items="getTeams(1)"
                  placeholder=""
                  @drop="onDrop($event, 1)"
        >
            <div class="play_off_title"> Uczestnicy</div>
            <ElementsList id="team_listing" height="498px" width="100%">
                <Draggable v-for="it in getTeams(1)" :item="it.name"></Draggable>
            </ElementsList>
        </DropZone>

        <div id="bracket_layout">
            <ElementsList height="600px" width="1000px">
                <div id="center">
                    <div v-for="pair in pairs" class="play_off">
                        <div class="play_off_title"> Para {{ pair.pair_id }}</div>
                        <div class="play_off_teams">
                            <DropZone
                                :items="getTeams(pair.home_id)"
                                @drop="onDrop($event, pair.home_id, 1)"
                            >
                                <Draggable v-for="it in getTeams(pair.home_id)" :item="it.name"></Draggable>
                            </DropZone>

                            <div class="separator">
                                -
                            </div>

                            <DropZone
                                :items="getTeams(pair.away_id)"
                                @drop="onDrop($event, pair.away_id, 1)"
                            >
                                <Draggable v-for="it in getTeams(pair.away_id)" :item="it.name"></Draggable>
                            </DropZone>
                        </div>
                    </div>
                </div>
            </ElementsList>
        </div>
    </main>
    <div id="button_panel">
        <button id="reset" @click="resetLayout">Resetuj układ</button>
        <button id="send" @click="sendBracket">Zapisz układ</button>
    </div>
</template>

<style scoped>

#main {
    height: 650px;
}

#center {
    justify-content: center;
}


#bracket_layout {
    margin: 15px;
}

.play_off_teams {
    border: 1px;
    border-style: solid;
    border-color: var(--color-border-hover);
    display: flex;
    margin: 10px;
    padding: 20px;
    justify-content: space-around;
    align-items: baseline;
}

.play_off_title {
    font-size: 24px;
    text-align: center;
    color: var(--color-heading);
    margin-bottom: 20px;
}

.separator {
    font-size: 52px;
    text-align: center;
}

#team_selector {
    height: 650px;
}

#team_listing {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

#button_panel {
    width: 60%;
    display: flex;
    justify-content: space-around;
    padding: 30px;
}

button {
    font-size: 18px;
    color: var(--color-black);
    border: 5px solid var(--color-default-input);
    border-radius: 10px;
    padding: 8px;
    width: 200px;
    cursor: pointer;
}

button:hover {
    opacity: 0.6;
}

#reset {
    background-color: var(--color-default-input);
}

#send {
    background-color: var(--color-heading);
}

</style>