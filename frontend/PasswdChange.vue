<script setup type="module" >

import TopPanel from './components/panels/TopPanel.vue';
import MainPanel from './components/MainPanel.vue';
import MainContent from './components/MainContent.vue';
import BaseItem from './components/baseItem.vue';
import EmailField from './components/test_input_fields/EmailField.vue';
import PasswordField from './components/test_input_fields/PasswordField.vue';
import LinkButtonVue from './components/buttons/LinkButton.vue'; 
</script>
<template>
    <header>
        <TopPanel />

        <div class="wrapper">
            <MainPanel msg="CHAD Competition Hub Administration & Design" />
            
            <h1>W celu zmiany hasła podaj nowe e-mail oraz nowe hasło</h1>
            
        </div>
    </header>

    <main>
    
        <BaseItem>
           <template #heading>Podaj login (e-mail)</template>
            <EmailField></EmailField>
        </BaseItem>
        <BaseItem>
           <template #heading>Podaj nowe hasło</template>
            <PasswordField></PasswordField>
        </BaseItem>
        <BaseItem>
           <template #heading>Potwierdź nowe hasło</template>
            <PasswordField></PasswordField>
        </BaseItem>
        <BaseItem>
             <LinkButtonVue  id ="change_passwd"  label="ZMIEŃ !" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be"> </LinkButtonVue>
         </BaseItem>  
    </main>
</template>


<style>
@import './assets/base.css';

#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--color-background);
    color: var(-color-text2);
    font-weight: normal;
}
#change_passwd {
  background-color: var(--color-background);
  border: none;
  color: var(-color-text2);
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
        
        background-color: var(--color-background);
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
