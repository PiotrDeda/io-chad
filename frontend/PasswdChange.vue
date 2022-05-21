<script setup>
import TopPanel from './components/panels/TopPanel.vue';
import MainPanel from './components/MainPanel.vue';
import baseItem from './baseItem.vue'
import PasswordField from './components/test_input_fields/PasswordField.vue';
</script>

<template>
    <header>
        <TopPanel />
        <div class="wrapper">
            <MainPanel msg="CHAD Competition Hub Administration & Design" />
        </div>
    </header>

    <main>
        <baseItem>
            <template #heading>Podaj nowe hasło</template>
            <PasswordField></PasswordField>
            
        </baseItem>  
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
