<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import Draggable from '../components/draggable/Draggable.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import DropZone from '../components/draggable/DropZone.vue';

import {ref} from 'vue';

// zaladowanie info o turnieju
const props = defineProps({
    amount: {type: Number, required: false, default: 16},
    tournament: {type: String, required: false, default: "Turniej"},
    pairs: {type: Array, required: false, default: []}
});

// zaladowanie druzyn
const comps = ref([
    {name: 'jeden', list: 1},
    {name: 'dwa', list: 1},
    {name: 'trzy', list: 1},
    {name: 'cztery', list: 1},
    {name: 'piec', list: 1},
    {name: 'szesc', list: 1},
    {name: 'siedem', list: 1},
    {name: 'osiem', list: 1},
    {name: 'dziewiec', list: 1},
    {name: 'dziesiec', list: 1},
    {name: 'jedenascie', list: 1},
    {name: 'dwanascie', list: 1},
    {name: 'trzynascie', list: 1},
    {name: 'czternascie', list: 1},
    {name: 'pietnascie', list: 1},
    {name: 'szesnascie', list: 1},
])

const loadPairs = () => {
    for (let i = 1; i < 1 + props.amount / 2; i++) {
        console.log(props.amount)
        props.pairs.push({pair_id: i, home_id: i * 2, away_id: i * 2 + 1})
    }
    console.log(props.pairs)
}

const onDrop = (event, list, limit) => {
    const new_name = event.dataTransfer.getData('item');
    const new_item = comps.value.find((it) => it.name === new_name)
    if (getTeams(list).length >= limit) {
        return
    }
    new_item.list = list
    console.log(list)
}

const getTeams = (list) => {
    return comps.value.filter((it) => it.list === list)
}

function resetLayout() {
    comps.value.forEach((it) => {
        it.list = 1;
    })
}

loadPairs()

</script>

<template>
    <TopPanel/>
    <header>
        <h1> {{ tournament }} </h1>
        <h3> Kreator drabinki turniejowej </h3>
    </header>

    <main id="main">
        <DropZone id="team_selector"
                  placeholder=""
                  @drop="onDrop($event, -1)"
                  :items="getTeams(-1)"
        >
            <div class="play_off_title"> Uczestnicy</div>
            <ElementsList height="498px" width="100%" id="team_listing">
                <Draggable v-for="it in getTeams(1)" :item="it.name"></Draggable>
            </ElementsList>
        </DropZone>

        <div id="bracket_layout">
            <ElementsList width="1000px" height="600px">
                <div id="center">
                    <div v-for="pair in pairs" class="play_off">
                        <div class="play_off_title"> Para {{ pair.pair_id }}</div>
                        <div class="play_off_teams">
                            <DropZone
                                @drop="onDrop($event, pair.home_id, 1)"
                                :items="getTeams( pair.home_id )"
                            >
                                <Draggable v-for="it in getTeams(pair.home_id)" :item="it.name"></Draggable>
                            </DropZone>

                            <div class="separator">
                                -
                            </div>

                            <DropZone
                                @drop="onDrop($event, pair.away_id, 1)"
                                :items="getTeams( pair.away_id )"
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