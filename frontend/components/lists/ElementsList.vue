<script setup>
const props = defineProps(
    {
        height: {type: String, default: '90px'},
        width: {type: String, default: '400px'}
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
    width: v-bind(props.width);
    height: v-bind(props.height);
}

.scroll-area
{
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: center;

    padding: 10px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) var(--color-border-hover);
    background-color: var(--color-input-background);
    border-radius: 6px;
    overflow-x: hidden;
}

</style>