<script setup>
import EmailField from "../input_fields/EmailField.vue"
import LoginField from "../input_fields/LoginField.vue"
import PasswordField from "../input_fields/PasswordField.vue";
import CheckboxButton from "../buttons/CheckboxButton.vue"
import SubmitButton from "../buttons/SubmitButton.vue";
import axios from "axios";

async function loginAccount(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    if (form.password.value !== form.repeatedPassword.value) {
        alert("Hasła nie są identyczne");
        return;
    }

    await axios.post("http://localhost:8000/accounts/register", {
        email: form.email.value,
        login: form.login.value,
        passwd: form.password.value
    })
        .then(response => {
            localStorage.setItem("jwt", response.data.token);
            window.location.href = "/";
        })
        .catch(error => {
            console.log(error);
            if (error.response.data.message)
                alert(error.response.data.message);
            else if (error.response.data.err)
                alert(error.response.data.err);
        })
}
</script>

<template>
    <div class="register_panel">
        <form id="form1" @submit="loginAccount">
            <div class="email_text">
                <span>
                    E-Mail
                    <EmailField placeholder="Podaj email"/>
                </span>
            </div>
            <div class="login_text">
                <span>
                    Login
                    <LoginField placeholder="Podaj login"/>
                </span>
            </div>
            <div class="haslo_text">
                <span>
                    Hasło
                    <PasswordField placeholder="Podaj hasło"/>
                </span>
            </div>
            <div class="haslo_powt_text">
                <span>
                    <PasswordField name="repeatedPassword" placeholder="Powtórz hasło"/>
                </span>
            </div>
            <div class="checkbox_button">
                <span>
                    <CheckboxButton label="Akceptuję regulamin"/>
                </span>
            </div>
            <div class="create_button">
                <span>
                    <SubmitButton label="Utwórz konto"/>
                </span>
            </div>
        </form>
    </div>
</template>

<style>
.register_panel {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 35px; /* y x */

    position: fixed;
    left: 0%;
    right: 37%;
    top: 10%;
    bottom: 45%;

    background-color: var(--color-background);
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
}

.email_text {
    padding: 0px 0px; /* y x */
}

.login_text {
    padding: 0px 5px; /* y x */
}

.haslo_text {
    padding: 0px 4px; /* y x */
}

.haslo_powt_text {
    padding: 0px 45px; /* y x */
}

.checkbox_button {
    padding: 5px 25px; /* y x */
}

.create_button {
    padding: 20px 100px; /* y x */
}


</style>
