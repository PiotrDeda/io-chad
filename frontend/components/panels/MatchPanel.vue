<script setup>
import BaseButton from '../buttons/BaseButton.vue';
import SubmitButton from "../buttons/SubmitButton.vue";
import axios from "axios";

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
            default: ['id1']
        },
    tournament:
        {
            type: Object,
            required: true
        },
    match_info:
        {
            type: Object,
            required: true,
            default: {
                match_order: -1,
                home: '',
                away: '',
                home_score: '',
                away_score: '',
                played: false,
                date: '-',
                notes: ''
            }
        },
    refreshFunction:
        {
            type: Function,
            required: true
        }
})

const switchMatch = () => {
    if (props.match_info.value.match_label === 'Pierwszy mecz') {
        props.match_info.value.match_label = "Rewanż"
    } else {
        props.match_info.value.match_label = "Pierwszy mecz"
    }

}

async function saveMatch(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    let i, j;
    search:
        for (i = 0; i < props.tournament.stages.length; i++) {
            for (j = 0; j < props.tournament.stages[i].matches.length; j++) {
                if (props.tournament.stages[i].matches[j]._id === props.ids[0]) {
                    break search;
                }
            }
        }

    props.tournament.stages[i].matches[j].participantOneScore = form.mp_home_points.value;
    props.tournament.stages[i].matches[j].participantTwoScore = form.mp_away_points.value;
    props.tournament.stages[i].matches[j].date = form.mp_date_select.value;
    props.tournament.stages[i].matches[j].notes = form.mp_comment.value;

    await axios.put('http://localhost:8000/competitions/' + props.tournament._id, props.tournament,
        {
            headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}
        })
        .then(response => {
            props.offFunction();
            props.refreshFunction();
        })
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
}

</script>

<template>
    <div id="mp_popup">
        <header> {{ match_info.tournament }}</header>
        <form id="form1" @submit="saveMatch">
            <div id="mp_result">
                <div id="mp_home" class="mp_team">{{ match_info.home }}</div>
                <input id="mp_home_points" :value="match_info.home_score" class="mp_score_input" max="999" min="-99"
                       type="number"/>
                <div class="mp_separator"> -</div>
                <input id="mp_away_points" :value="match_info.away_score" class="mp_score_input" max="999" min="-99"
                       type="number"/>
                <div id="mp_away" class="mp_team">{{ match_info.away }}</div>
            </div>

            <div id="mp_info">
                <h1> Data meczu: </h1>
                <input id="mp_date_select" :value="match_info.date" max="2099-12-31" min="2000-01-01" type="date"/>
                <h1> Informacje: </h1>
                <textarea id="mp_comment">{{ match_info.notes }}</textarea>
            </div>

            <div id="mp_buttons">
                <BaseButton v-if="props.ids.length > 1" :label="match_info.match_label" @click="switchMatch()"/>
                <BaseButton label="Wyjdź" @click="offFunction()"/>
                <SubmitButton label="Zapisz"/>
            </div>
        </form>
    </div>
</template>

<style scoped>

#mp_popup {
    position: fixed;
    z-index: 99;
    left: 25%;
    right: 25%;
    bottom: 35%;
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

header {
    color: var(--color-heading);
    font-size: 28px;
}

h1 {
    margin-top: 10px;
    font-size: 18px;
}

.mp_team {
    width: 300px;
    font-size: 18px;
    color: var(--color-valid-input)
}

#mp_home {
    text-align: right;
    padding-right: 40px;
}

#mp_away {
    text-align: left;
    padding-left: 40px;
}

.mp_separator {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 16px;
}

.mp_score_input {
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

.mp_score_input:focus {
    border: 2px solid var(--color-border-hover);
}

#mp_comment {
    height: 80px;
    width: 400px;
    padding: 0 5px;
    resize: none;
    outline: none;
    background-color: var(--color-default-input);
    border: 2px solid var(--color-default-input);
    font: inherit;
}

#mp_comment:focus {
    border: 2px solid var(--color-border-hover);
}

#mp_result {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 5px;
}

#mp_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#mp_buttons {
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

#mp_date_select:focus {
    border: 2px solid var(--color-border-hover);
}

</style>