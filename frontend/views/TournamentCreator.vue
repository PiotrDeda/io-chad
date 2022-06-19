<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import ListsRow from '../components/lists/ListsRow.vue';
import LinkButton from "../components/buttons/LinkButton.vue";

const route = useRoute();
const tournament = ref({});

onMounted(async () => {
    await axios.get('http://localhost:8000/competitions/' + route.params.id, {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}})
        .then(response => (tournament.value = response.data.competition))
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
})
</script>

<template>
    <TopPanel/>
    <header>
        <h1>Kreator Turnieju</h1>
        <h2>{{ tournament.name }}</h2>
    </header>

    <main>
        <article>
            <ElementsList height="100%" width="100%">
                Faza grupowa:
                <ListsRow height="fit-content">
                    <IntegerField label="Grupa A" max="8" min="0" value="0"/>
                    <IntegerField label="Grupa B" max="8" min="0" value="0"/>
                    <IntegerField label="Grupa C" max="8" min="0" value="0"/>
                    <IntegerField label="Grupa D" max="8" min="0" value="0"/>
                    <IntegerField label="Grupa E" max="8" min="0" value="0"/>
                </ListsRow>
                <ListsRow height="fit-content">

                </ListsRow>
            </ElementsList>
        </article>
        <aside>
            <IntegerField label="Liczba uczestników" max="12" min="0" value="4"/>
            <IntegerField label="Mecze bezpośrednie" max="4" min="0" value="2"/>
            <IntegerField label="Liczba grup" max="20" min="0" value="2"/>
            <IntegerField label="Punkty do bezpośredniego awansu" max="99" min="0" value="2"/>
            <IntegerField label="Punkty do baraży" max="99" min="0" value="2"/>
            <IntegerField label="Punkty do awansu warunkowego*" max="99" min="0" value="2"/>
            <IntegerField label="Punkty za wygraną" max="99" min="0" value="3"/>
            <IntegerField label="Punkty za remis" max="99" min="-99" value="1"/>
            <IntegerField label="Punkty za przegraną" max="99" min="-99" value="0"/>
            <DropdownList
                :items="['Bilans bramkowy', 'Bezpośredni mecz', 'Losowo', 'Wybór ręczny']"
                placeholder="W przypadku remisu punktowego decyduje:"
            />
        </aside>
    </main>
    <LinkButton label="Drabinka" :link="`/bracket/${tournament._id}`"/>
</template>

<style scoped>
@import '../assets/base.css';

article {
    padding: 15px;
    margin: 15px;
    margin-right: 7.5px;

    width: 70%;
    min-width: fit-content;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

aside {
    padding: 15px;
    margin: 15px;
    margin-left: 7.5px;

    width: calc(30% - 45px);
    min-width: fit-content;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
}

</style>
