<script setup>
    const props = defineProps(
    {
        form: { type: String, default: "form1" },
        minLength: {type: Number, default: 5 },
        maxLength: { type: Number, default: 30 },
        autofocus: { type: Boolean, default: false},
        disabled: { type: Boolean, default: false }
    });
</script>

<template>
    <input
        type="email"
        :autofocus="props.autofocus"
        :form="props.form"
        name="email"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :size="props.maxLength"
        pattern="/^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i"
        placeholder="email address"
        :disabled="props.disabled"
        required
    />
</template>

<style scoped>
input[type="email"]::placeholder
{
    color: var(--color-text);
}

input[type="email"]
{
    color: var(--color-text);
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

input[type="email"]:focus, input[type="email"]:hover
{
    outline: none;
    border-color: var(--color-border);
}

</style>
