<script setup>
    import {onMounted, ref} from "vue";
    import {useRoute} from "vue-router";
    import axios from "axios";
    import TopPanel from '../components/panels/TopPanel.vue';

    const route = useRoute();
    const tournament = ref({});

    onMounted(async () => {
        await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
            .then(response => {
                tournament.value = response.data.competition;
            })
            .catch(error => {
                console.log(error);
                if (error.response.data.message)
                    alert(error.response.data.message);
                else if (error.response.data.err)
                    alert(error.response.data.err);
            })
            .finally(() => {
                console.log(tournament.value);
            });
    });

    // placeholder input
    const ph_input = ref({
        owner: "62b050b2b6e1493827bd5c49",
        name: "test_3",
        game: "Sport",
        type: "Liga",
        directMatchesCount: 1,
        winPoints: 3,
        drawPoints: 1,
        losePoints: 0,
        scoreTieResolution: "Bilans bramkowy",
        participants: [
            { name: "One", _id: "62b06cb5f342e8e45c0dd874" },
            { name: "Two", _id: "62b06cb5f342e8e45c0dd875" },
            { name: "Three", _id: "62b06cb5f342e8e45c0dd876" },
            { name: "Four", _id: "62b06cb5f342e8e45c0dd877" },
        ],
        stages:[
            { 
                number: 1,
                matches: [
                    {
                        _id: "62b07a4ed8fcde98acfd7c61",
                        participantOne: "62b06cb5f342e8e45c0dd874",
                        participantTwo: "62b06cb5f342e8e45c0dd875",
                        participantOneScore: 1,
                        participantTwoScore: 3,
                        date: "2010.04.10",
                        notes: "Bardzo istotna notatka"
                    },
                    {
                        _id: "62b07a4ed8fcde98acfd7c62",
                        participantOne: "62b06cb5f342e8e45c0dd876",
                        participantTwo: "62b06cb5f342e8e45c0dd877",
                        participantOneScore: 22,
                        participantTwoScore: 13,
                        date: "2010.04.11",
                        notes: "A tutaj inna notatka"
                    },
                    {
                        _id: "62b07a4ed8fcde98acfd7c61",
                        participantOne: "62b06cb5f342e8e45c0dd874",
                        participantTwo: "62b06cb5f342e8e45c0dd877",
                        participantOneScore: 5,
                        participantTwoScore: 3,
                        date: "2010.04.12",
                        notes: "Niezbyt notatka"
                    },
                    {
                        _id: "62b07a4ed8fcde98acfd7c61",
                        participantOne: "62b06cb5f342e8e45c0dd876",
                        participantTwo: "62b06cb5f342e8e45c0dd875",
                        participantOneScore: 1,
                        participantTwoScore: 1,
                        date: "2010.04.13",
                        notes: "Dziennica"
                    },
                ]
            },
        ]
    });

    function generateParticipantTable(data)
    {
        var result = [];
        // console.log(data);
        for(let participant of data.participants)
        {
            var el = {
                name: participant.name,
                _id: participant._id,
                score: getParticipantScore(data, participant._id),
                goals: getSumOfGoalsOfParticipant(data, participant._id),
                wins: getParticipantWinCount(data, participant._id),
                draws: getParticipantDrawCount(data, participant._id),
                losses: getParticipantLossCount(data, participant._id),
            };
            result.push(el);
        }
        // sorting
        result = result.sort((a, b) => {
            if (a.score === b.score)
            {
                return a.goals < b.goals;
            }
            return a.score < b.score;
        });

        return result;
    }

    function getParticipantName(data, id)
    {
        return data.participants.find(participant => participant._id === id).name;
    }

    function getSumOfGoalsOfParticipant(data, id)
    {
        var sum = 0;
        for(let match of data.stages[0].matches)
        {
            if(match.participantOne === id) { sum += match.participantOneScore; }
            else if(match.participantTwo === id) { sum += match.participantTwoScore; }
        }
        return sum;
    }

    function getParticipantWinCount(data, id)
    {
        var sum = 0;
        for(let match of data.stages[0].matches)
        {
            if(match.participantOne === id)
            {
                if(match.participantOneScore > match.participantTwoScore) { sum++; }
            }
            else if(match.participantTwo === id)
            {
                if(match.participantOneScore < match.participantTwoScore) { sum++; }
            }
        }
        return sum;
    }

    function getParticipantDrawCount(data, id)
    {
        var sum = 0;
        for(let match of data.stages[0].matches)
        {
            if((match.participantOne === id) || (match.participantTwo === id))
            {
                if(match.participantOneScore == match.participantTwoScore) { sum++; }
            }
        }
        return sum;
    }

    function getParticipantLossCount(data, id)
    {
        var sum = 0;
        for(let match of data.stages[0].matches)
        {
            if(match.participantOne === id)
            {
                if(match.participantOneScore < match.participantTwoScore) { sum++; }
            }
            else if(match.participantTwo === id)
            {
                if(match.participantOneScore > match.participantTwoScore) { sum++; }
            }
        }
        return sum;
    }

    function getParticipantScore(data, id)
    {
        var winPoints = data.winPoints;
        var drawPoints = data.drawPoints;
        var lossPoints = data.losePoints;
    
        var sum = 0;
        for(let match of data.stages[0].matches)
        {
            if(match.participantOne === id)
            {
                if(match.participantOneScore > match.participantTwoScore) { sum += winPoints; }
                else if(match.participantOneScore == match.participantTwoScore) { sum += drawPoints; }
                else if(match.participantOneScore < match.participantTwoScore) { sum += lossPoints; }
            }
            else if(match.participantTwo === id)
            {
                if(match.participantOneScore > match.participantTwoScore) { sum += lossPoints; }
                else if(match.participantOneScore == match.participantTwoScore) { sum += drawPoints; }
                else if(match.participantOneScore < match.participantTwoScore) { sum += winPoints; }
            }
        }
        return sum;
    }
</script>

<template>
    <TopPanel />
    <header>
        <h1>CHAD Competition Hub Administration & Design</h1>
        <h3>Nowoczesny generetor turniejów specjalnie dla ciebie! Twórz turnieje już teraz w kilku prostych
            krokach!</h3>
    </header>
    <main>
        <article>
            <h3>Tabela ligowa uczestników</h3>
            <div class="lp_scrollable">
                <table>
                    <thead>
                        <tr>
                            <th>Nazwa uczestnika</th>
                            <th>Punkty</th>
                            <th>Bramki</th>
                            <th>Zwycięstwa</th>
                            <th>Remisy</th>
                            <th>Porażki</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="pnt in generateParticipantTable(ph_input)">
                            <td class="lp_participant_name">{{ pnt.name }}</td>
                            <td class="lp_participant_score">{{ pnt.score }}</td>
                            <td class="lp_participant_goals">{{ pnt.goals }}</td>
                            <td class="lp_participant_wins">{{ pnt.wins }}</td>
                            <td class="lp_participant_draws">{{ pnt.draws }}</td>
                            <td class="lp_participant_losses">{{ pnt.losses }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </main>
</template>

<style scoped>
    @import '../assets/base.css';

    main
    {
        flex-direction: column;
        width: 40%;
        min-width: fit-content;
    }

    article
    {
        display: flex;
        flex-direction: column;
        place-items: center;

        width: 100%;
        min-width: fit-content;
        height: fit-content;

        padding-bottom: 15px;
        margin: 15px 0px;

        border-width: 1px;
        border-style: solid;
        border-color: var(--color-border);
        border-radius: 6px;
    }

    article h3
    {
        text-align: center;
        width: 100%;
        padding: 15px;
    }

    .lp_scrollable
    {
        display: flex;
        flex-direction: column;
        place-items: center;

        width: 100%;
        height: fit-content;
        max-height: 400px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    table
    {
        width: 100%;
        border-collapse: collapse;
    }

    tr
    {
        place-content: center;
        place-items: center;

        width: 100%;
        padding: 0px 15px;

        border-width: 0px;
        border-style: solid;
        border-color: var(--color-border);
        border-top-width: 1px;
        border-bottom-width: 1px;
    }

    th
    {
        color: var(--color-text-hover);
        font-size: 17px;
    }

    td, th
    {
        text-align: center;
        padding: 7.5px 7.5px;
        height: 100%;

        border-width: 1px;
        border-style: solid;
        border-color: var(--color-border);
    }

</style>