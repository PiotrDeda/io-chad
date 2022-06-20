<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import BracketStage from '../components/panels/BracketStage.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import TopPanel from '../components/panels/TopPanel.vue';
import axios from "axios";

const route = useRoute();
const stages = ref([]);
const tournament = ref({});

onMounted(async () => {
    await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => {
            tournament.value = response.data.competition;
        })
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })

    for (let i = 0; i < tournament.value.stages.length; i++) {
        stages.value.push([]);
        for (let j = 0; j < tournament.value.stages[i].matches.length; j++) {
            stages.value[i].push([tournament.value.stages[i].matches[j]._id]);
        }
    }
})

</script>

<template>
    <TopPanel/>

    <div id="bracket_view">
        <header> {{ tournament.name }} - drabinka turniejowa</header>
        <ElementsList flex="auto" width="1200px" xbar="thin">
            <BracketStage v-for="stage in stages" :matches_id="stage"
                          :matches_per_pair="tournament.directMatchesCount" :tournament="tournament">
            </BracketStage>
        </ElementsList>
    </div>
</template>

<style scoped>

#bracket_view {
    display: flex;
    flex-direction: column;
}

header {
    color: var(--color-heading);
    font-size: 44px;
    margin: 20px;
}


</style>
