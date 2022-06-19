<script setup>
import LoginField from "../input_fields/LoginField.vue";
import PasswordField from "../input_fields/PasswordField.vue";
import SubmitButton from "../buttons/SubmitButton.vue";
import axios from "axios";

async function changePassword(event) {
    event.preventDefault();  // prevent site from reloading
    const form = document.getElementById("form1");

    await axios.put("http://localhost:8000/accounts/changepassword", {
        login: form.login.value,
        oldPasswd: form.oldPasswd.value,
        newPasswd: form.newPasswd.value
    },{headers: {Authorization: "Bearer " + localStorage.getItem("jwt")}})
        .then(response => {
            alert(response.data.message);
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
    <div class="login_panel">
        <form id="form1" @submit="changePassword">
            <div class="login_text">
                <span>
                    Login
                    <LoginField autofocus maxLength="20"/>
                </span>
            </div>
            <div class="old_password_text">
                <span>
                    Stare hasło
                    <PasswordField name="oldPasswd"/>
                </span>
            </div>
            <div class="new_password_text">
                <span>
                    Nowe hasło
                    <PasswordField name="newPasswd"/>
                </span>
            </div>
            <div class="change_button">
                <span>
                    <SubmitButton label="Zmień hasło"/>
                </span>
            </div>
        </form>
    </div>
</template>

<style scoped>
.login_panel {
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

.login_text {
    padding: 0px 5px; /* y x */
}

.password_text {
    padding: 0px 4px; /* y x */
}

.login_button {
    padding: 20px 100px; /* y x */
}


</style>
