<script setup>

const props = defineProps(
    {
        items: {type: Array, required: true, default: []},
        placeholder: {type: String, required: false, default: "drop item here"}
    });

</script>

<template>
    <div class="drop_zone" @dragover.prevent @dragenter.prevent>
        <div v-if="items.length === 0" class="zone_placeholder">{{ placeholder }}</div>
        <slot></slot>
    </div>
</template>

<style scoped>

.drop_zone
{
    display: flex;
    flex-direction: column;

    place-items: center;
    place-content: center;

    margin: 0px 4px;
    padding: 15px;

    width: 100%;
    min-height: 60px;

    color: var(--color-text);
    background-color: transparent;
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 6px;
    border-width: 1px;
    cursor: pointer;
    
    transition: 0.4s;
}

.zone_placeholder
{
    /* font-size: 12px; */
    text-align: center;
    color: var(--color-text);
}

</style>