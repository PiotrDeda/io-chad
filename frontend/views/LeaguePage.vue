<script setup>
import {ref} from 'vue';
import BracketStage from '../components/panels/BracketStage.vue';

const matches = ref( {ids: ['id_1', 'id_2']} ) 

</script>

<template>
    <main>
        <BracketStage :matches_id="matches.ids" />
    </main>
</template>

<style scoped>


</style>
