<script setup>
    import BaseButton from "./BaseButton.vue";

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
    <BaseButton :label="props.label" @click="redirect" />
</template>
