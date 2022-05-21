<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LinkButton from './components/buttons/LinkButton.vue'
import TopPanel from './components/panels/TopPanel.vue';
import DropdownList from './components/lists/DropdownList.vue';
import ElementsList from './components/lists/ElementsList.vue';
import ListsRow from './components/lists/ListsRow.vue';
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />
        </div>

        <div id="elementList">
            <ElementsList width="500px" height="500px">
                <ListsRow height="80px">
                    <DropdownList id='dropdown' placeholder="que1" :items="['11', '2']">
                    </DropdownList>
                    <DropdownList id='dropdown2' placeholder="que2" :items="['11', '2']">
                    </DropdownList>
                </ListsRow>
                <ListsRow height="200px">
                    <DropdownList id='dropdown3' placeholder="que3" :items="['1', '2', '3']">
                    </DropdownList>
                    <DropdownList id='dropdown4' placeholder="que4" :items="['1', '2', '3']">
                    </DropdownList>
                    <DropdownList id='dropdown5' placeholder="que5" :items="['1', '2', '67']">
                    </DropdownList>
                </ListsRow>
                <ListsRow>
                    <DropdownList id='dropdown6' placeholder="que6" :items="['1', '2', '4', '6']">
                    </DropdownList>
                </ListsRow>
            </ElementsList>



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

    font-weight: normal;
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
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
}

/* @media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
} */

@media (min-width: 1024px) {
    body {
        display: flex;
        place-items: center;
    }

    #app {
        display: grid;
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
