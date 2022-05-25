<script setup>
    const props = defineProps(
    {
        label: { type: String, required: true },
        link: { type: String, default: "/" }
    });

    function redirect()
    {
        window.location.href = props.link;
    }
</script>

<template>
    <button type="button" @click="redirect()">{{ label }}</button>
</template>

<style scoped>
button
{
    text-align: center;
    color: var(--color-text);
    font-size: inherit;

    margin: 4px;
    padding: 5px 15px;
    background-color: var(--color-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    cursor: pointer;

    transition: 0.4s;
}

@media(hover: hover)
{
    button:hover
    {
        border-color: var(--color-border);
        color: var(--color-text-hover);
    }
}
</style>