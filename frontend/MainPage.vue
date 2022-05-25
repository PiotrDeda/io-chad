<script setup>

import LinkButton from './components/buttons/LinkButton.vue'
import TopPanel from './components/panels/TopPanel.vue';
import MainPanel from './components/MainPanel.vue';
import MainContent from './components/MainContent.vue';
import PasswdChange from './PasswdChange.vue';
import DropdownList from './components/lists/DropdownList.vue';
import ElementsList from './components/lists/ElementsList.vue';
import ListsRow from './components/lists/ListsRow.vue';
</script>

<template>
    <header>
        <TopPanel />

        <div class="wrapper">
            <MainPanel msg="CHAD Competition Hub Administration & Design" />
        </div>
    </header>

    <main>
        <MainContent />
    </main>
</template>






<style>
@import './assets/base.css';

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--vt-c-black);
    color: var(--vt-c-text-dark-1);
    font-weight: normal;
}
#przycisk_generuj {
  background-color: var(--vt-c-black);
  border: none;
  color: var(--vt-c-text-dark-1);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

header {
    line-height: 1.5;
}

@media (min-width: 1024px) {
    body {
        
    background-color: var(--color-background-soft);
        display: flex;
        place-items: center;
    }
    #app {
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
    }
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}

</style>
