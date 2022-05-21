<script setup>
import WelcomeItem from './WelcomeItem.vue'

</script>

<template>
  <WelcomeItem>
    <template #heading>Nazwa Turnieju</template>
    <input :value="text">
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Gra</template>
    <input :value="text">
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Typ Turnieju</template>
    <select id="typ_turnieju" name="typturnieju" size="2">
      <option value="Play off">Play off</option>
      <option value="Liga">Liga</option>
    </select>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Podaj liczbę uczestników</template>
    <input type="number" name="liczba_uczestnikow" id="liczba_uczestnikow" >
  </WelcomeItem>
  
  <WelcomeItem>
    <template #heading>Uczestnicy (jeden uczestnik w jednej lini)</template>
    <textarea id="uczestnicy" name="uczestnicy" rows="4" cols="30">

    </textarea>
  </WelcomeItem>  

  <WelcomeItem>
    <button id="przycisk_generuj">GENERUJ !</button>
  </WelcomeItem>  

</template>
