<script setup>
    import EmailField from "../test_input_fields/EmailField.vue"
    import PasswordField from "../test_input_fields/PasswordField.vue";
    import LinkButton from "../buttons/LinkButton.vue";

    const props = defineProps(
    {
        auth: { type: Boolean, required: true }
    });
</script>
<template>
    <div class="login_panel">
        <div class = "login_text">  <!-- from top -->
            <span>
                Login
                <EmailField placeholder="Podaj login" />
            </span>
        </div>
        <div class = "haslo_text">
            <span>
                Hasło
                <PasswordField placeholder="Podaj hasło" />
            </span>
        </div>
        <div class = "haslo_powt_text">
            <span>
                <PasswordField placeholder="Powtórz hasło" />
            </span>
        </div> 
        <div class = "login_button">
            <span>
                <LinkButton label = "Zaloguj się"/>
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
    left: 23%;
    right: 23%;
    top: 10%;
    bottom: 60%;

    background-color: var(--chad-c-background);
    border-top-style: solid;
    border-top-width: thin;
    border-top-color: var(--chad-c-border);
    border-left-style: solid;
    border-left-width: thin;
    border-left-color: var(--chad-c-border);
    border-right-style: solid;
    border-right-width: thin;
    border-right-color: var(--chad-c-border);
    border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: var(--chad-c-border);
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
