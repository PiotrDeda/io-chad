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
<<<<<<< HEAD:frontend/components/buttons/LinkButton.vue
    color: var(--chad-c-gray);
    font-size: inherit;
=======
    color: rgb(16, 187, 255);
>>>>>>> c4090ce (strona glowna):src/components/buttons/LinkButton.vue

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
<<<<<<< HEAD:frontend/components/buttons/LinkButton.vue
        color: var(--chad-c-green-hover);
=======
        color: rgb(16, 187, 255);
        background-color: aliceblue;
>>>>>>> c4090ce (strona glowna):src/components/buttons/LinkButton.vue
    }
}
</style>
