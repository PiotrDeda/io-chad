<script setup>
    import LinkButton from "../buttons/LinkButton.vue"

    const props = defineProps(
    {
        auth: { type: Boolean, required: true }
    });
</script>

<!-- TODO: change links to proper subsites as soon as they are created -->
<template>
    <div class="top_panel">
        <span> <!-- left side -->
            <LinkButton label="Home" link="https://youtu.be/dQw4w9WgXcQ" />
        </span>
        <span> <!-- right side -->
            <LinkButton label="Login" link="https://google.com" />
            <LinkButton label="Register" link="https://stackoverflow.com" />
        </span>
    </div>
</template>

<style scoped>
.top_panel
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 5px; /* y x */

    position: fixed;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 100% - 50px;

    background-color: var(--chad-c-background);
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--chad-c-border);
    /* border-bottom-color: white; */

    z-index: 1; /* always bring to front */
}
</style>
