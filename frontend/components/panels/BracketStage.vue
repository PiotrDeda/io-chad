<script setup>

import {onMounted, ref} from 'vue';
import MatchButton from '../buttons/MatchButton.vue';

const props = defineProps({
    tournament: { type: Object, required: true },
    matches_id: {
        type: Array,
        required: true,
        default: [['']]
    },
});

const stage_name = ref('Finał');

onMounted(() => {
    if (props.matches_id.length > 1) {
        stage_name.value = "1/" + (props.matches_id.length).toString() + " finału";
    }
})
</script>


<template>
    <div id="stage">
        <h2> {{ stage_name }} </h2>
        <div id="stage_body">
            <MatchButton v-for="m in props.matches_id" :match_id="m" :tournament="props.tournament"/>
        </div>
    </div>
</template>

<style scoped>

#stage_body {
    height: 100%;
    border-left: 2px solid var(--color-border);
    border-right: 2px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
}

h2 {
    text-align: center;
    color: var(--color-heading);
    font-size: 28px;
}

</style>