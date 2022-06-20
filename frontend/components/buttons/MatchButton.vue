<script setup>
import {onMounted, ref} from 'vue';
import MatchPanel from '../panels/MatchPanel.vue';

const props = defineProps({
    tournament: {type: Object, required: true},
    match_id: {type: Array, required: true, default: ['']},
});

const match_info = ref({});
const details = ref({show: false});

const detailsPopup = () => {
    details.value.show = !details.value.show;
}

function getMatchInfo() {
    let temp;
    for (let i = 0; i < props.tournament.stages.length; i++) {
        temp = props.tournament.stages[i].matches.find(match => match._id === props.match_id[0]);
        if (temp) {
            break;
        }
    }
    if (!temp.participantOne || !temp.participantTwo) {
        return;
    }
    match_info.value = {
        match_order: -1,
        home: props.tournament.participants.find(participant => participant._id === temp.participantOne).name,
        away: props.tournament.participants.find(participant => participant._id === temp.participantTwo).name,
        home_score: temp.participantOneScore,
        away_score: temp.participantTwoScore,
        played: temp.participantOneScore && temp.participantTwoScore,
        date: temp.date,
        notes: temp.notes
    };
}

onMounted(() => {
    getMatchInfo();
})

</script>

<template>
    <MatchPanel v-if="details.show" :ids="props.match_id" :match_info="match_info" :offFunction="detailsPopup"
                :tournament="props.tournament" :refreshFunction="getMatchInfo"/>
    <div id="match_button" @click="()=>detailsPopup()">

        <div v-if="match_info.date === '-'" class="info_line"> Nie ustalono</div>
        <div v-else class="info_line"> {{ match_info.date }}</div>

        <div class="info_line">
            <h4> {{ match_info.home }} </h4>
            <h2 v-if="match_info.played"> {{ match_info.home_score }} </h2>
            <h2 v-else> - </h2>
        </div>

        <div class="info_line">
            <h4> {{ match_info.away }} </h4>
            <h2 v-if="match_info.played"> {{ match_info.away_score }} </h2>
            <h2 v-else> - </h2>
        </div>
    </div>
</template>


<style scoped>

#match_button {
    padding: 5px 10px 5px 10px;
    font-size: 16px;
    height: 120px;
    width: 220px;
    margin: 5px;
    border: 2px solid var(--color-border);
    border-radius: 6px;
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#match_button:hover {
    background-color: var(--color-background-soft);
    border: 2px solid var(--color-border-hover);
    cursor: pointer;
}

.info_line {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
}

h4 {
    flex-grow: 2;
    text-align: left;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
}

h2 {
    padding-left: 15px;
    padding-right: 15px;
    color: var(--color-valid-input);
}

</style>