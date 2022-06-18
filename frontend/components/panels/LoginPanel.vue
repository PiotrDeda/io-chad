<script setup>
    import EmailField from "../input_fields/EmailField.vue"
    import LoginField from "../input_fields/LoginField.vue";
    import PasswordField from "../input_fields/PasswordField.vue";
    import SubmitButton from "../buttons/SubmitButton.vue";
    import axios from "axios";

    async function loginAccount(event)
    {
        event.preventDefault();  // prevent site from reloading

        var form = document.getElementById("form1");
        try
        {
            let response = await axios.post("http://localhost:8000/accounts/login", {login: form.login.value, passwd: form.password.value});
            console.log(response);
            let token = response.data.token;
            if (token)
            {
                localStorage.setItem("jwt", token);
                event.router.push("/");
            }
        }
        catch (err)
        {
            console.log(err);
        }
    }
</script>

<template>
    <div class="login_panel">
        <form id="form1" @submit="loginAccount">
            <div class="login_text">
                <span>
                    Login
                    <LoginField autofocus maxLength="20" />
                </span>
            </div>
            <div class="password_text">
                <span>
                    Hasło
                    <PasswordField />
                </span>
            </div>
            <div class="login_button">
                <span>
                    <SubmitButton label="Zaloguj się" />
                </span> 
            </div>
        </form>
    </div>
</template>

<style scoped>
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

.password_text
{
    padding: 0px 4px; /* y x */
}

.login_button
{
    padding: 20px 100px; /* y x */
}


</style>
