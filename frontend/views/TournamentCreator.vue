<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import ListsRow from '../components/lists/ListsRow.vue';
</script>

<template>
    <TopPanel/>
    <header>
        <h1>Kreator Turnieju</h1>
        <h2>{{ $route.params.id }}</h2>
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
