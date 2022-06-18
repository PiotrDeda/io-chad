<script setup>
    const props = defineProps(
    {
        height: { type: String, default: '90px' },
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
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) var(--color-border-hover);
    background-color: var(--color-input-background);
    border-radius: 4px;
    overflow-x: hidden;
}

.main-window
{
    border: 2px solid var(--color-border);
    border-radius: 4px;
    width: v-bind(props.width);
    height: v-bind(props.height);
}

</style>