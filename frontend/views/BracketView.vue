<script setup>
import {ref} from 'vue';
import BracketStage from '../components/panels/BracketStage.vue';
import ElementsList from '../components/lists/ElementsList.vue';
import TopPanel from '../components/panels/TopPanel.vue';

const bracket = defineProps( {
                            matches_per_pair: 
                            {
                                type: Number,
                                required: true, 
                                default: 1
                            },

                            stages: 
                            {
                                type: Array,
                                required: true, 
                                default: [  [['id_1'], ['id_2'], ['id_3'], ['id_4'], 
                                             ['id_5'], ['id_6'], ['id_7'], ['id_8'] ],

                                            [['id_9'], ['id_10'], ['id_11'], ['id_12']] ,

                                            [['id_13'], ['id_14']],

                                            [['id_1']] ]
                            },

                            name:
                            {
                                type: String,
                                required: true, 
                                default: "Turniej"
                            },
                        }) 
</script>

<template>
    <TopPanel/>

    <div id = "bracket_view">
        <header> {{bracket.name}} - drabinka turniejowa </header>
        <ElementsList width="1200px" xbar="thin" flex="auto">
            <BracketStage v-for="stage in stages" :matches_id="stage" :matches_per_pair = "bracket.matches_per_pair">
            
            </BracketStage>
        </ElementsList>

    </div>

</template> 

<style scoped>

#bracket_view{
    display: flex;
    flex-direction: column;
}

header{
    color: var(--color-heading);
    font-size: 44px;
    margin: 20px;
}



</style>
