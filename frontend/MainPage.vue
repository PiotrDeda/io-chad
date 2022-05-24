<script setup>

import LinkButton from './components/buttons/LinkButton.vue'
import TopPanel from './components/panels/TopPanel.vue';
import MainPanel from './components/MainPanel.vue';
import MainContent from './components/MainContent.vue';
import PasswdChange from './PasswdChange.vue';
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
    background-color: rgba(12, 4, 36, 0.996);
    color: aliceblue;
    font-weight: normal;
}
#przycisk_generuj {
  background-color: rgb(16, 187, 255);
  border: none;
  color: aliceblue;
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
a,
.blue {
    text-decoration: none;
    color: rgb(16, 187, 255);
    transition: 0.4s;
}


@media (min-width: 1024px) {
    body {
        
    background-color: rgba(12, 4, 36, 0.996);
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
