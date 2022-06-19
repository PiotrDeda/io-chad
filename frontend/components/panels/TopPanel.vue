<script setup>
    import axios from "axios";
    import LinkButton from "../buttons/LinkButton.vue"
    import BaseButton from "../buttons/BaseButton.vue";

    function isAuth()
    {
        return localStorage.getItem("jwt") != null;
    }

    async function logout() {
        await axios.delete("http://localhost:8000/accounts/logout", {headers: {"Authorization": 'Bearer ' + localStorage.getItem("jwt")}});
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
            <LinkButton v-if="!isAuth()" label="Zaloguj" link="/login" />
            <LinkButton v-if="!isAuth()" label="Załóż Konto" link="/register" />
            <BaseButton v-else label="Wyloguj" @click="logout" />
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
