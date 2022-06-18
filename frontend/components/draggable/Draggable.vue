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
    <div draggable="true"
         class="draggable"
         name='{{props.item}}'
         @dragstart="startDrag($event, item)"
    >
        {{ props.item }}
    </div>
</template>

<style scoped>
.draggable {
    text-align: center;
    color: var(--color-text);
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    width: 240px;
    background-color: var(--color-background);
    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);
    cursor: pointer;
    margin: 10px;
    transition: 0.4s;
}

.draggable:hover {
    color: var(--color-text-hover);
    border-color: var(--color-border-hover);
}
</style>