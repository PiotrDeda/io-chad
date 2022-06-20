<script setup>
const props = defineProps(
    {
        height: {type: String, required: false, default: '90px'},
        width: {type: String, required: false, default: '400px'},
        flex: {type: String, required: false, default: 'column'},
        xbar: {type: String, required: false, default: 'hidden'},
        
    });
</script>

<template>
    <div class="main-window">
        <div class="scroll-area">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.main-window
{
    display: flex;
    place-items: center;
    place-content: center;

    border-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
    height: auto;
    width: auto;
    min-width: v-bind(props.width);
    min-height: v-bind(props.height);
}

.scroll-area
{
    display: flex;
    overflow-x: v-bind(props.xbar);
    flex-direction: v-bind(props.flex);
    place-items: center;
    place-content: center;
    align-items: stretch;

    padding: 10px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) var(--color-border-hover);
    background-color: var(--color-input-background);
    border-radius: 6px;
}

</style>