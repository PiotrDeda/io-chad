<script setup>

import {ref} from 'vue';
import MatchButton from '../buttons/MatchButton.vue';

//tablica meczy
const matches = defineProps({

                            matches_per_pair: {
                                        type: Number,
                                        required: true, 
                                        default: 1
                                    },

                            matches_id:{ 
                                        type: Array, 
                                        required: true, 
                                        default: [ ['id1'] ]
                                    },
                            })

const stage_info = ref( {stage_name: 'Finał'})

function setName() {
    console.log("Stage name setting")
    console.log( matches.matches_id )
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
                <MatchButton v-for="m in matches.matches_id" :match_id="m"/>
            </div>
    </div>
</template>

<style scoped>

#stage_body{
    height: 100%;
    border-left: 2px solid var(--color-border);
    border-right: 2px solid var(--color-border);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
}

h2{
    text-align: center;
    color: var(--color-heading);
    font-size: 28px;
}



</style>