<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from "vue-router";
import MatchButton from '../components/buttons/MatchButton.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import BaseButton from '../components/buttons/BaseButton.vue';
import TopPanel from '../components/panels/TopPanel.vue';
import axios from "axios";

//62b0cc2cf45a23b7c1a134d6 <id


const route = useRoute();
const participants = ref([]);
const tournament = ref({});
const matches= ref([]);

const stage_info = ref({stage_name: 'Finał'})

onMounted(async () => {
    await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => {
            tournament.value = response.data.competition;
             for (let i = 0; i < tournament.value.participants.length; i++) {
                participants.value.push([]);
                for (let j = 0; j < tournament.value.participants[i].length; j++) {
            
            //participants.value[i].push([tournament.value.participants[i]._id]);
        }
    }
            
        })
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })

   
matches.value = tournament.value.stages[0].matches;
})

const readPairs = (f, t, trg)=>{
    out = []
    if ( t[0] != 'no_id') 
        trg.push( [f, t[0]] )
    for (let i = 1; i < t.length-1; i++) {
        if ( t[i] != 'no_id' && t[i+1] != 'no_id' )
            trg.push( [t[i], t[i+1]] )
    }
} 

/*
onMounted(async () => {
    var dwumecz = false;          // sprawdzenie czy mają być grane mecze i rewanże
    var free = participants.value._id;             // dowolnego zespołu - najepiej jego ID         
    var tab;  //  wczytanie pozostałych zespołów - najepiej ID

    for (i = 1; i < participants.length; i++)
    {
        tab.push(participants[i]._id);
    }
    //console.log(tab)

    const pushTable = (tab)=>{
    to_unshift = tab.pop()
    tab.unshift(to_unshift)
    }


// sprawdzamy czy jest nieparzysta ilość zespołów, jeśli tak dodajemy "no_id" żeby obie pętli działał poprawnie
if ( !(tab.length%2) ){  
    tab.push('no_id')
}

var all_matches = []
var id_matches = []

for (let i = 0; i < tab.length; i++) { 
    readPairs(free, tab, all_matches) 
    pushTable(tab)
}

// dodanie rewanży
if(dwumecz){
    j = all_matches.length
    for (let i = 0; i < j; i++) { 
        all_matches.push( [all_matches[i][1], all_matches[i][0]] )
    }
}
})
*/
//async function saveTeams()

    function getTeams(list) {
    return comps.value.filter((it) => it.list === list);
}

</script>

<template>
    <TopPanel/>
    <!--<BaseButton @click="saveTeams" label="Resetuj układ"></BaseButton>-->
    <div id="bracket_view">
        <header> {{ tournament.name }} - terminarz meczy</header>
        <article>
            
            <ElementsList flex="auto" width="120px" xbar="thin">
                <div>
                    {{participants.value = "name"}}
                    <MatchButton v-for="m in matches" :match_id="[m._id]" :tournament = "tournament"></MatchButton>
                </div>
            </ElementsList>
        </article>
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

main
{
    width: 40%;
}

article
{
    display: flex;
    flex-direction: column;
    place-items: center;

    width: 30%;
    height: 400px;
    min-width: fit-content;

    margin-right: 7.5px;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
}
</style>
