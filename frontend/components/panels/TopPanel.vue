<script setup>
    import LinkButton from "../buttons/LinkButton.vue"

    function isAuth()
    {
        var token = localStorage.getItem("jwt");
        return (token != null);
    }

    function logout()
    {
        localStorage.removeItem("jwt");
        window.location.href = "/";
    }
</script>

<template>
    <div class="top_panel">
        <span> <!-- left side -->
            <LinkButton label="Strona Główna" link="/" />
        </span>
        <span> <!-- right side -->
            <LinkButton v-if="isAuth() != true" label="Zaloguj" link="/login" />
            <LinkButton v-if="isAuth() != true" label="Załóż Konto" link="/register" />
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
