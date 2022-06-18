<script setup>
import Draggable from '../draggable/Draggable.vue'

const props = defineProps(
    {
        listTitle: {type: String, required: true, default: "_list_"},
        teams: { type: Array, default: ['team1', 'team2', 'team3'] },

});

function _init_() {
    console.log( props.items )
}

_init_()
</script>


<template>
    <div class="list_of_draggable">
        <ElementsList>
            <div class="listTitle"> {{listTitle}} </div>
            <Draggable v-for="team in teams" :value="team" :name="team">  </Draggable>
        </ElementsList>    
    </div>
</template>


<style >
.listTitle
{ 
    font-size: 24px;
    text-align: center;
    color: var(--color-heading);
}

</style>