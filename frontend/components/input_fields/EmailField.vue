<script setup>
const props = defineProps(
    {
        form: {type: String, default: "form1"},
        placeholder: {type: String, default: "adres email"},
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
        name="email"
        pattern="/^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i"
        required
        type="email"
    />
</template>

<style scoped>
input[type="email"]::placeholder {
    color: var(--color-text);
}

input[type="email"] {
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

input[type="email"]:focus, input[type="email"]:hover {
    outline: none;
    border-color: var(--color-border-hover);
}

</style>
