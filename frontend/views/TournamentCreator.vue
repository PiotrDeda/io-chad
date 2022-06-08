<script setup>
import TopPanel from '../components/panels/TopPanel.vue';
import IntegerField from '../components/input_fields/IntegerField.vue';
import DropdownList from '../components/lists/DropdownList.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import ListsRow from '../components/lists/ListsRow.vue';
</script>

<template>
    <TopPanel />
    <header>
        <h1>Kreator Turnieju</h1>
    </header>

    <main>
        <article>
            <ElementsList height="100%" width="100%">
                Faza grupowa:
                <ListsRow height="fit-content">
                    <IntegerField label="Grupa A" min="0" max="8" value="0" />
                    <IntegerField label="Grupa B" min="0" max="8" value="0" />
                    <IntegerField label="Grupa C" min="0" max="8" value="0" />
                    <IntegerField label="Grupa D" min="0" max="8" value="0" />
                    <IntegerField label="Grupa E" min="0" max="8" value="0" />
                </ListsRow>
                <ListsRow height="fit-content">

                </ListsRow>
            </ElementsList>
        </article>
        <aside>
            <IntegerField label="Liczba uczestników" min="0" max="12" value="4" />
            <IntegerField label="Mecze bezpośrednie" min="0" max="4" value="2" />
            <IntegerField label="Liczba grup" min="0" max="20" value="2" />
            <IntegerField label="Punkty do bezpośredniego awansu" min="0" max="99" value="2" />
            <IntegerField label="Punkty do baraży" min="0" max="99" value="2" />
            <IntegerField label="Punkty do awansu warunkowego*" min="0" max="99" value="2" />
            <IntegerField label="Punkty za wygraną" min="0" max="99" value="3" />
            <IntegerField label="Punkty za remis" min="-99" max="99" value="1" />
            <IntegerField label="Punkty za przegraną" min="-99" max="99" value="0" />
            <DropdownList
                placeholder="W przypadku remisu punktowego decyduje:"
                :items="['Bilans bramkowy', 'Bezpośredni mecz', 'Losowo', 'Wybór ręczny']"
            />
        </aside>
    </main>
</template>

<style scoped>
@import '../assets/base.css';

article
{
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

aside
{
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
