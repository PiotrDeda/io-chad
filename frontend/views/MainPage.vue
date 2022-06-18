<script setup>
import LinkButton from '../components/buttons/LinkButton.vue'
import TopPanel from '../components/panels/TopPanel.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import Draggable from '../components/draggable/Draggable.vue';
import DropZone from '../components/draggable/DropZone.vue';

import {ref} from 'vue';

const teams = ref([
    { name: 'jeden', list: 1},
    { name: 'dwa', list: 1},
    { name: 'trzy', list: 1},
    { name: 'cztery', list: 1},
    { name: 'piec', list: 1},
    { name: 'szesc', list: 1},
    { name: 'siedem', list: 1},
    { name: 'osiem', list: 1},
    { name: 'dziewiec', list: 1},
])

  const onDrop = (event, list, limit)=>{
        const new_name =  event.dataTransfer.getData('item');
        const new_item = teams.value.find( (it)=> it.name === new_name )
        console.log(new_item.list)
        if( getTeams(list).length >= limit ){
            return
        }
        new_item.list = list 
        console.log( list )
}

const getTeams = (list)=>{
    return teams.value.filter( (it)=> it.list === list )
}

</script>

<template>
    <TopPanel />
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych krokach!</h3>
    </header>

    <main>
     
        <DropZone   title="Wszystko"
                    @drop="onDrop($event, 1)"
                    :items = "getTeams(1)"
                    >
            <Draggable v-for="it in getTeams(1)" :item="it.name"> </Draggable>    
        </DropZone>
        
        <DropZone   title="Drużyny A"
                    @drop="onDrop($event, 2)"
                    :items = "getTeams(2)"
                    >
            <Draggable v-for="it in getTeams(2)" :item="it.name"> </Draggable>    
        </DropZone>

        <DropZone   title="Drużyny B"
                    @drop="onDrop($event, 3, 2)"
                    :items = "getTeams(3)"
                    :limit="2"
                    >
            <Draggable v-for="it in getTeams(3)" :item="it.name"> </Draggable>    
        </DropZone>

        <div>
        </div>


     
    </main>
</template>

<style scoped>
@import '../assets/base.css';

</style>
