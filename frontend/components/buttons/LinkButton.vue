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
    color: rgb(16, 187, 255);

    margin: 4px;
    padding: 5px 15px;
    background-color: rgba(12, 4, 36, 0.996);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--chad-c-border);

    cursor: pointer;

    transition: 0.4s;
}

@media(hover: hover)
{
    button:hover
    {
        border-color: var(--chad-c-border-hover);
        color: rgb(16, 187, 255);
        background-color: aliceblue;
    }
}
</style>
