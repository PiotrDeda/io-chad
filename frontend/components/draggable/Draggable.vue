<script setup>
const props = defineProps(
    {
        item: {type: String, required: true, default: "_item_"}
    });

const startDrag = (event, porps) => {
    console.log("props.item", props.item)
    event.dataTransfer.dropEffect = 'move'
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('item', props.item)
}
</script>

<template>
    <div class="draggable"
         draggable="true"
         name='{{props.item}}'
         @dragstart="startDrag($event, item)"
    >
        {{ props.item }}
    </div>
</template>

<style scoped>
.draggable
{
    display: flex;
    place-items: center;
    place-content: center;

    color: var(--color-text);
    font-size: inherit;

    width: 100%;
    margin: 4px;
    padding: 7.5px 15px;

    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    cursor: pointer;
    transition: 0.4s;
}

.draggable:hover
{
    color: var(--color-text-hover);
    border-color: var(--color-border-hover);
}
</style>