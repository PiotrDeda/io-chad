<script>
    // Using old API, because of this.$parent usage here
    export default
    {
        props:
        {
            text: { type: String, default: "Opcja" }
        }
    }
</script>

<template>
    <div class="mtf_option">
        <div class="mtf_option_text_box">{{ this.$props.text }}</div>
        <button class="remove_option_button" type="button" @click="this.$parent.$data.removeOption(this.$props.text)">-</button>
    </div>
</template>

<style scoped>
.mtf_option
{
    display: flex;
    
    padding-left: 15px;
    padding-right: 15px;
    margin-top: 2px;
    margin-bottom: 2px;

    width: 100%;
}

.mtf_option_text_box
{
    display: flex;

    justify-content: center;

    color: var(--color-valid-input);
    font-size: inherit;

    margin: 0px;
    padding: 6px 15px;

    width: 100%;

    border-width: 1px;
    border-radius: 6px;
    border-color: var(--color-border);
    border-style: solid;
}

.remove_option_button
{
    color: var(--color-default-input);
    font-size: inherit;

    padding: 7.5px 15px;
    margin-left: 7.5px;
    background-color: transparent;

    border-width: 1px;
    border-radius: 6px;
    border-color: var(--color-border);
    border-style: solid;

    transition: 0.4s;
}

.remove_option_button:hover
{
    color: var(--color-valid-input);
    border-color: var(--color-border-hover);
}

.remove_option_button:active
{
    background-color: var(--color-background-soft);
    transition: 0s;
}

</style>
