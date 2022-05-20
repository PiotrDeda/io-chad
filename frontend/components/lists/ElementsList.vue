<script setup>
    const props = defineProps(
    {
        height: { type: String, default: '300px' },
        width: { type: String, default: '400px' }
    });
</script>

<template>
    <div class="main-window">
        <div class="scroll-area">
            <slot></slot>
        </div>
    </div>
</template>

<style >
.scroll-area
{
    position: relative;
    margin: auto;
    padding: 5px;
    width: 100%;
    height: 100%;
    overflow: scroll;
    scrollbar-width: auto;
    scrollbar-color: rgb(0, 145, 96) rgb(142, 142, 142);
    background-color: inherit;
    border-radius: 4px;
    z-index: -1;
}

.main-window
{
    border: 2px solid rgb(0, 145, 96);
    border-radius: 4px;
    width: v-bind(props.width);
    height: v-bind(props.height);
    z-index: 1;
}

</style>