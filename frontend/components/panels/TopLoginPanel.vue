<!--Like TopPage, but with only one button on the right side-->
<script setup>
    import LinkButton from "../buttons/LinkButton.vue"

    const props = defineProps(
    {
        auth: { type: Boolean, required: true }
    });
</script>

<template>
    <div class="top_login_panel">
        <span> <!-- left side -->
            <LinkButton label="Home" />
        </span>
        <span> <!-- right side -->
        <!-- For register site change to: Have an account already?-->
            <LinkButton label="Don't have an account?"/>
        </span>
    </div>
</template>

<style scoped>
.top_login_panel
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
    border-bottom-color:  var(--color-border);
    /* border-bottom-color: white; */

    z-index: 1; /* always bring to front */
}
</style>
