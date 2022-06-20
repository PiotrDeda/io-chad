<script setup>
import {ref} from 'vue';
import MatchPanel from '../panels/MatchPanel.vue';

//id meczu i ew rewanżu
const match = defineProps({
                                match_id1:{ type: String, required: true, default: "_item_"},
                                match_id2:{ type: String, required: false, default: "_item_"}
                        })

// znzjdz mecz po id
const match_info = ref({   
                        match_order: -1, 
                        home: "Lech Poznań",
                        away: "KS Raków Częstochowa 1999",
                        home_score: 0,
                        away_score: 0,
                        played: true,
                        date: "01.01.2000"
                        })

//doadac wczytanie rewanzu

const details = ref( {show: false} )

const detailsPopup = () =>{
    console.log(details.value.show);
    details.value.show = !details.value.show;
}



</script>

<template>
    <MatchPanel v-if="details.show" :offFunction="() => detailsPopup()" :id1="match.match_id1" :id2="match.match_id2"/>
    <div id="match_button" @click="()=>detailsPopup()">

        <div v-if="match_info.date === '-'" class="info_line"> Nie ustalono </div>
        <div v-else class="info_line"> {{match_info.date}} </div>
        
        <div class="info_line">                                   
            <h4> {{match_info.home}} </h4>   
            <h2 v-if="match_info.played" > {{match_info.home_score}} </h2>
            <h2 v-else> - </h2>
        </div>

        <div class="info_line">                               
            <h4> {{match_info.away}} </h4>
            <h2 v-if="match_info.played" > {{match_info.away_score}} </h2>
            <h2 v-else> - </h2>
        </div>
    </div>
</template>


<style scoped>

#match_button{
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

#match_button:hover{
    background-color: var(--color-background-soft);
    border: 2px solid var(--color-border-hover);
    cursor: pointer;
}
.info_line{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
}

h4{
    flex-grow: 2;
    text-align: left;
    padding-left: 5px;
    white-space: nowrap;
    overflow: hidden;
}

h2{
    padding-left: 15px;
    padding-right: 15px;
    color: var(--color-valid-input);
}


</style>