<script setup>

import {ref} from 'vue';
import MatchButton from '../buttons/MatchButton.vue';

//tablica meczy
const matches = defineProps({
                            matches_id:{ 
                                        type: Array, 
                                        required: true, 
                                        default: ['id1', 'id2']
                                    },
                            })

const stage_info = ref( {stage_name: 'Finał'})

function setName() {
    console.log("Stage name setting")
    console.log( matches.match_id )
    if( matches.matches_id.length > 1)
    {
        stage_info.value.stage_name = "1/" + (matches.matches_id.length).toString() + " finału"
    }
    console.log(stage_info.value.stage_name)
}

setName()
</script>


<template>
    <div id="stage"> 
        <h2> {{stage_info.stage_name}} </h2>
            <div id="stage_body">
                <MatchButton v-for="m in matches.matches_id" :match_id1="m.match_id" :match_id2="m.match_id"/>
            </div>
    </div>
</template>

<style scoped>

#stage_body{
    min-height: 600px;
    border-left: 2px solid var(--color-border);
    border-right: 2px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
}

h2{
    text-align: center;
    color: var(--color-heading);
    font-size: 28px;
}



</style>