<script setup>
    const props = defineProps(
    {
        form: { type: String, default: "form1" },
        disabled: { type: Boolean, default: false }
    });
</script>

<template>
    <input
        type="password"
        :form="props.form"
        name="password"
        size="20"
        placeholder="password"
        :disabled="props.disabled"
        required
    />
</template>

<style scoped>
input[type="password"]::placeholder
{
    color: var(--chad-c-gray);
}

input[type="password"]
{
    color: var(--chad-c-green);
    font-size: inherit;

    margin: 4px;
    padding: 7.5px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--chad-c-border);

    transition: 0.4s;
}

input[type="password"]:focus, input[type="password"]:hover
{
    outline: none;
    border-color: var(--chad-c-border-hover);
}

</style>
