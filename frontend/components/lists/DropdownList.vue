<script setup>
const props = defineProps(
    {
        items: {type: Array, default: ['o1', 'o2', 'o3']},
        name: {type: String, default: "dropdownList"},
        placeholder: {type: String, default: "_select_"}
    });
</script>

<template>
    <select :name="props.name">
        <option disabled selected value="">{{ props.placeholder }}</option>
        <option v-for="it in items" :value="it"> {{ it }}</option>
    </select>
</template>

<style scoped>
select {
    text-align: center;
    color: var(--color-text);
    font-size: inherit;

    margin: 4px;
    padding: 9px 10px;
    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    cursor: pointer;

    transition: 0.4s;
}

select:hover {
    color: var(--color-text-hover);
    border-color: var(--color-border-hover);
}

option:hover {
    border-color: var(--color-border);
    background-color: var(--color-background-soft);
    transition: 0.4s;
}
</style>