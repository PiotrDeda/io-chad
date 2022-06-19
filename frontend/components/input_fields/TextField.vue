<script setup>
const props = defineProps(
    {
        label: { type: String, required: true },
        name: { type: String, default: "inputText" },
        form: { type: String, default: "form1" },
        autofocus: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    });
</script>

<template>
    <input
        type="text"
        :autofocus="props.autofocus"
        :disabled="props.disabled"
        :form="props.form"
        :name="props.name"
        :placeholder="props.label"
        required
    />
</template>

<style scoped>
input[type="text"]
{
    color: var(--color-valid-input);
    font-size: inherit;

    width: 100%;

    margin: 4px;
    padding: 9px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

input[type="text"]::placeholder
{
    color: var(--color-text);
}

input[type="text"]:focus,
input[type="text"]:hover
{
    outline: none;
    border-color: var(--color-border-hover);
    transition: 0.4s;
}
</style>
