<script setup>
const props = defineProps(
    {
        label: {type: String, required: true}
    });
</script>

<template>
    <button type="button">{{ label }}</button>
</template>

<style scoped>
button {
    text-align: center;
    color: var(--color-text);
    font-size: inherit;

    margin: 4px;
    padding: 9px 15px;
    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    cursor: pointer;

    transition: 0.4s;
}

@media (hover: hover) {
    button:hover {
        border-color: var(--color-border-hover);
        color: var(--color-text-hover);
    }
}
</style>