<script setup>
const props = defineProps(
    {
        form: {type: String, default: "form1"},
        label: {type: String, required: true},
        disabled: {type: Boolean, default: false}
    });
</script>

<template>
    <input
        :id="props.label"
        :disabled="props.disabled"
        :form="props.form"
        :value="label"
        type="submit"
    />
</template>

<style scoped>
input[type="submit"] {
    text-align: center;
    color: var(--color-text);
    font-size: inherit;

    margin: 4px;
    padding: 9px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    cursor: pointer;

    transition: 0.4s;
}

@media (hover: hover) {
    input[type="submit"]:hover {
        border-color: var(--color-border-hover);
        color: var(--color-text-hover);
    }
}
</style>