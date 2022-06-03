<script setup>
    import LinkButton from "../buttons/LinkButton.vue"

    const props = defineProps(
    {
        auth: { type: Boolean, required: true, default: false }
    });
</script>

<!-- TODO: change links to proper subsites as soon as they are created -->
<template>
    <div class="top_panel">
        <span> <!-- left side -->
            <LinkButton label="Strona Główna" link="/tc" />
        </span>
        <span> <!-- right side -->
            <LinkButton v-if="props.auth != true" label="Zaloguj" link="https://google.com" />
            <LinkButton v-if="props.auth != true" label="Załóż Konto" link="https://stackoverflow.com" />
            <LinkButton v-else label="Wyloguj" link="https://stackoverflow.com" />
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

    background-color: var(--color-background);
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--color-border);

    z-index: 1; /* always bring to front */
}
</style>
