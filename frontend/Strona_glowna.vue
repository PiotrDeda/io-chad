<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LinkButton from './components/buttons/LinkButton.vue'
import TopPanel from './components/panels/TopPanel.vue';
</script>

<template>
    <header>
        <TopPanel />

        <div class="wrapper">
            <HelloWorld msg="CHAD Competition Hub Administration & Design" />
        </div>
    </header>

    <main>
        <TheWelcome />
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

.logo {
    display: block;
    margin: 0 auto 2rem;
}


a,
.green {
    text-decoration: none;
    color: rgb(16, 187, 255);
    transition: 0.4s;
}

/* @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
} */

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

    .logo {
        margin: 0 2rem 0 0;
    }
    
}

</style>
