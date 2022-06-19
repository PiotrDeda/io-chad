<script setup>
const props = defineProps(
    {
        name: {type: String, default: "password"},
        form: {type: String, default: "form1"},
        placeholder: {type: String, default: "hasło"},
        disabled: {type: Boolean, default: false}
    });
</script>

<template>
    <input
        :disabled="props.disabled"
        :form="props.form"
        :placeholder="placeholder"
        :name="props.name"
        required
        size="20"
        type="password"
    />
</template>

<style scoped>
input[type="password"]::placeholder {
    color: var(--color-text);
}

input[type="password"] {
    color: var(--color-valid-input);
    font-size: inherit;

    margin: 4px;
    padding: 7.5px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

input[type="password"]:focus, input[type="password"]:hover {
    outline: none;
    border-color: var(--color-border-hover);
}

</style>
