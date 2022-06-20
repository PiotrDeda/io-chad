<script setup>
import {ref, onMounted} from 'vue';
import {useRoute} from "vue-router";
import BracketStage from '../components/panels/BracketStage.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import TopPanel from '../components/panels/TopPanel.vue';
import axios from "axios";

const route = useRoute();
const bracket = ref({
    stages: [[['id_1'], ['id_2'], ['id_3'], ['id_4'], ['id_5'], ['id_6'], ['id_7'], ['id_8']],
        [['id_9'], ['id_10'], ['id_11'], ['id_12']],
        [['id_13'], ['id_14']],
        [['id_1']]],
})
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
})

</script>

<template>
    <TopPanel/>

    <div id="bracket_view">
        <header> {{ tournament.name }} - drabinka turniejowa</header>
        <ElementsList flex="auto" width="1200px" xbar="thin">
            <BracketStage v-for="stage in bracket.stages" :matches_id="stage"
                          :matches_per_pair="tournament.directMatchesCount">
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
