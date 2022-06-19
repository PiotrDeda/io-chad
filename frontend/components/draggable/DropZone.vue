<script setup>

const props = defineProps(
    {
        items: {type: Array, required: true, default: []},
        placeholder: {type: String, required: false, default: "drop item here"}
    });

</script>

<template>
    <div class="main">
        <div class="drop_zone"
             @dragover.prevent
             @dragenter.prevent
        >
            <div v-if="items.length === 0" class="zone_placeholder"> {{ placeholder }}</div>

            <slot></slot>

        </div>
    </div>
</template>

<style scoped>
.main {
    display: inline-block;
}


.drop_zone {
    color: var(--color-text);
    background-color: var(--color-background);
    border-style: solid;
    border-color: var(--color-border);
    border-radius: 10px;
    cursor: pointer;
    margin: 15px;
    padding: 20px;
    min-width: 286px;
    min-height: 20px;
    transition: 0.4s;
}

.zone_placeholder {
    font-size: 12px;
    text-align: center;
    color: var(--color-heading);
}

</style>