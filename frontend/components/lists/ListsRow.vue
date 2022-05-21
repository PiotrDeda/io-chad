<script setup>
    const props = defineProps(
    {
        height: { type: String, default: '100px' },
        padding: { type: String, default: '5px'}
    });
</script>

<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<style >

.row
{
    position: relative;
    padding: v-bind(props.padding);
    height: v-bind(props.height);
    width: 100%;
    text-align: center;
    display: flex;
}


</style>