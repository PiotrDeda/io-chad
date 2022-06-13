<script setup>
    import EmailField from "../input_fields/EmailField.vue"
    import PasswordField from "../input_fields/PasswordField.vue";
    import LinkButton from "../buttons/LinkButton.vue";
    import {ref} from "vue";
    import axios from "axios";

    const props = defineProps(
    {
        auth: { type: Boolean, required: true }
    });

    const login = ref("");
    const password = ref("");

    async function loginAccount() {
        try {
            let response = await axios.post("http://localhost:8000/accounts/login", {login: login.value, passwd: password.value});
            console.log(response);
            let token = response.data.token;
            if (token) {
                localStorage.setItem("jwt", token);
                this.$router.push("/");
            }
        } catch (err) {
            console.log(err);
        }
    }
</script>
<template>
    <div class="login_panel">
        <div class = "login_text">  <!-- from top -->
            <span>
                Login
                <input v-model="login" placeholder="Podaj login" />
            </span>
        </div>
        <div class = "haslo_text">
            <span>
                Hasło
                <input v-model="password" placeholder="Podaj hasło" />
            </span>
        </div>
        <div class = "login_button">
            <span>
                <button @click="loginAccount">Zaloguj się</button>
            </span> 
        </div><!-- to bottom -->
    </div>
</template>

<style>
.login_panel
{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 35px; /* y x */

    position: fixed;
    left: 37%;
    right: 37%;
    top: 10%;
    bottom: 60%;

    background-color: var(--color-background-mute);
    border-top-style: solid;
    border-top-width: thin;
    border-top-color: var(--color-border);
    border-left-style: solid;
    border-left-width: thin;
    border-left-color: var(--color-border);
    border-right-style: solid;
    border-right-width: thin;
    border-right-color: var(--color-border);
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--color-border);
    /* border-bottom-color: white; */

    z-index: 1; /* always bring to front */
}

.login_text
{
    padding: 0px 5px; /* y x */
}

.haslo_text
{
    padding: 0px 4px; /* y x */
}

.login_button
{
    padding: 20px 100px; /* y x */
}


</style>
