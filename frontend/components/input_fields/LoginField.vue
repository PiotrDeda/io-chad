<script setup>
    const props = defineProps(
    {
        form: { type: String, default: "form1" },
        placeholder: { type: String, default: "login" },
        minLength: {type: Number, default: 5 },
        maxLength: { type: Number, default: 30 },
        autofocus: { type: Boolean, default: false},
        disabled: { type: Boolean, default: false }
    });
</script>

<template>
    <input
        type="text"
        :autofocus="props.autofocus"
        :form="props.form"
        name="login"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :size="props.maxLength"
        :placeholder="placeholder"
        :disabled="props.disabled"
        required
    />
</template>

<style scoped>
input[type="text"]::placeholder
{
    color: var(--color-text);
}

input[type="text"]
{
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

input[type="text"]:focus, input[type="text"]:hover
{
    outline: none;
    border-color: var(--color-border-hover);
}

</style>
