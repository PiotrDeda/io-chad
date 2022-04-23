<script setup>
    defineProps(
    {
        link:
        {
            type: String,
            required: true
        }
    })
</script>

<template>
    <a v-bind:href="link"><button type="button">Login</button></a>
</template>

<style scoped>
button
{
    text-align: center;
    color: var(--chad-c-green);

    margin: 0;
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
        background-color: var(--chad-c-element-background-hover);
    }
}
</style>
