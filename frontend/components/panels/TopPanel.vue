<script setup>
    import LinkButton from "../buttons/LinkButton.vue"

    const props = defineProps(
    {
        auth: { type: Boolean, required: true, default: false }
    });

    function logout() {
        localStorage.removeItem("jwt");
        this.$router.push("/");
    }
</script>

<!-- TODO: change links to proper subsites as soon as they are created -->
<template>
    <div class="top_panel">
        <span> <!-- left side -->
            <LinkButton label="Strona Główna" link="/tc" />
        </span>
        <span> <!-- right side -->
            <LinkButton v-if="props.auth != true" label="Zaloguj" link="/login" />
            <LinkButton v-if="props.auth != true" label="Załóż Konto" link="/register" />
            <LinkButton v-else label="Wyloguj" @click="logout" />
        </span>
    </div>
</template>

<style scoped>
.top_panel
{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 15px; /* y x */

    width: 100%;

    background-color: var(--color-background-soft);
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--color-border);

    z-index: 1; /* always bring to front */
}
</style>
