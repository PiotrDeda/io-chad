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
    color: var(--chad-c-gray);
    font-size: inherit;

    margin: 4px;
    padding: 5px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--chad-c-border);

    transition: 0.4s;
}

@media(hover: hover)
{
    button:hover
    {
        border-color: var(--chad-c-border-hover);
        color: var(--chad-c-green-hover);
    }
}
</style>
