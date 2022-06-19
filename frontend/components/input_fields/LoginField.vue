<script setup>
const props = defineProps(
    {
        form: {type: String, default: "form1"},
        placeholder: {type: String, default: "login"},
        minLength: {type: Number, default: 5},
        maxLength: {type: Number, default: 30},
        autofocus: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false}
    });
</script>

<template>
    <input
        :autofocus="props.autofocus"
        :disabled="props.disabled"
        :form="props.form"
        :maxlength="props.maxLength"
        :minlength="props.minLength"
        :placeholder="placeholder"
        :size="props.maxLength"
        name="login"
        required
        type="text"
    />
</template>

<style scoped>
input[type="text"]::placeholder {
    color: var(--color-text);
}

input[type="text"] {
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

input[type="text"]:focus, input[type="text"]:hover {
    outline: none;
    border-color: var(--color-border-hover);
}

</style>
