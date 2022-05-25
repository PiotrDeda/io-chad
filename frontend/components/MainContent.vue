<script setup>
import baseItem from './baseItem.vue'
import LinkButtonVue from './buttons/LinkButton.vue'
import DropdownList from './lists/DropdownList.vue';
import ElementsListVue from './lists/ElementsList.vue';
</script>

<template>
  <baseItem>
    <template #heading>Nazwa turnieju</template>
    <input :value="text">
    
  </baseItem>

  <baseItem>
    <template #heading>Gra</template>
    <input :value="text">
  </baseItem>

  <baseItem>
    <template #heading>Typ turnieju</template>
    <DropdownList :items ="['play-off', 'liga']" placeholder ='Typ turnieju'/>
  </baseItem>

  <baseItem>
    <template #heading>Podaj liczbę uczestników</template>
    <input type="number" name="liczba_uczestnikow" id="liczba_uczestnikow" >
  </baseItem>
  
  <baseItem>
    <template #heading>Uczestnicy (jeden uczestnik w jednej linii)</template>
   
    <ElementsListVue/> 
  </baseItem>  

  <baseItem>
    <LinkButtonVue  id ="przycisk_generuj"  label="GENERUJ !" link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> </LinkButtonVue>
  </baseItem>  

</template>
