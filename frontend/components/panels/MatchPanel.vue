<script setup>
import {ref} from 'vue';
import BaseButton from '../buttons/BaseButton.vue';

const props = defineProps({ 
                            offFunction:
                            {
                                type: Function,
                                required: true
                            }, 

                            ids:
                            {
                                type: Array,
                                required: true, 
                                default: ['id1', 'id2']
                            },
                        })

// znzjdz mecz po id
const info = ref({  tournament:    "Turniej", 
                    home:           "F.C Barclona",
                    away:           "Real Sociedad",
                    home_score:     0,
                    away_score:     0,
                    date:           "",
                    comment:        "",
                    match_label:    "Pierwszy mecz"})


const switchMatch = () => {
    if (info.value.match_label == 'Pierwszy mecz' ){
        info.value.match_label = "Rewanż"
    }  else {
        info.value.match_label = "Pierwszy mecz"
    }

}


</script>


<!-- ref.comment = document.getElementById("comment").value   czytanie zawartosci z textarea --> 


<template>
    <div id="mp_popup">
        <header>  {{info.tournament}}  </header>

        <div id="mp_result">
            <div class="mp_team" id="mp_home"> {{info.home}} </div>
            <input type="number" class="mp_score_input" id="mp_home_points" :value="info.home_score" min="-99" max="999"/>
            <div class="mp_separator"> - </div>
            <input type="number" class="mp_score_input" id="mp_away_points" :value="info.away_score" min="-99" max="999"/>
            <div class="mp_team" id="mp_away"> {{info.away}} </div>
        </div>
 
        <div id="mp_info">
            <h1> Data meczu: </h1>
            <input type="date" id="mp_date_select" value="2022-01-01" min="2000-01-01" max="2099-12-31"/>            
            <h1> Informacje: </h1>
            <textarea id="mp_comment"></textarea> 
        </div>

        <div id="mp_buttons">
            <BaseButton v-if="props.ids.length > 1" @click="switchMatch()" :label="info.match_label" />
            <BaseButton @click="offFunction()" label="Wyjdź"/>
            <BaseButton @click="sendResult" label="Zapisz"/>
        </div>

    </div>

</template>

<style scoped>

#mp_popup{
    position: fixed;
    left: 0;
    z-index: 99;
    margin-left: 25%;
    margin-right: 25%;
    background-color: var(--color-background-soft);
    height: 45%;
    width: 50%;
    max-width: 940px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 5px solid var(--color-border);
}

header{
    color: var(--color-heading);
    font-size: 28px;
}

h1{
    margin-top: 10px;
    font-size: 18px;
}

.mp_team{
    width: 300px;
    font-size: 18px;
    color: var(--color-valid-input)
}

#mp_home{
    text-align: right;
    padding-right: 40px;
}

#mp_away{
    text-align: left;
    padding-left: 40px;
}

.mp_separator{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
}

.mp_score_input{
    width: 40px;
    height: 40px;
    font-size: 18px;
    border-radius: 6px;
    background-color: var(--color-default-input);
    border: 2px solid var(--color-default-input);
    text-align: center; 
    outline: none;
    -moz-appearance: textfield;
}

.mp_score_input:focus{
    border: 2px solid var(--color-border-hover);
}

#mp_comment{
    height: 80px;
    width: 400px;
    padding:0 5px;
    resize: none;
    outline:none;
    background-color: var(--color-default-input);
    border: 2px solid var(--color-default-input); 
    font: inherit;
}

#mp_comment:focus{
    border: 2px solid var(--color-border-hover);
}

#mp_result{
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 5px;
    
}

#mp_info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#mp_buttons{
    margin: 20px;
    display: flex;
}

[type="date"] {
    border: 2px solid var(--color-default-input); 
    outline: none;
    font: inherit;
    text-align: center;
}

#mp_date_select {
    border-radius: 6px;
    background-color: var(--color-default-input);
    padding: 3px 5px;
    width: 200px;
}
#mp_date_select:focus{
    border: 2px solid var(--color-border-hover);
}

</style>