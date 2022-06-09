<script setup>
    const props = defineProps(
    {
        
        label: { type: String, required: true },
        form: { type: String, default: "form2" },
        autofocus: { type: Boolean, default: false},
        disabled: { type: Boolean, default: false }
    });
</script>

<template> 

    <div class="text_field_wrapper">
    <label>{{ label }}:</label>
    <input
        type="inputText"
        :autofocus="props.autofocus"
        :form="props.form"
        name="inputText"
        :minlength="props.minLength"
        :maxlength="props.maxLength"
        :size="props.maxLength"
        placeholder=""
        :disabled="props.disabled"
        required
    />
    </div>
</template>

<style scoped>
.text_field_wrapper
{
    color: var(--color-text);
    font-size: inherit;

    width: fit-content;

    margin: 4px;
    padding-left: 15px;

    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

.text_field_wrapper label
{
    margin-right: 15px;
}

.text_field_wrapper input[type="number"]
{
    color: var(--color-default-input);
    font-size: inherit;

    width: 70px;

    margin: 4px 0px;
    padding: 5px 15px;
    background-color: transparent;

    border-width: 0px;
    border-left-width: 1px;
    border-style: solid;
    border-color: var(--color-border);

    -moz-appearance: textfield;

    transition: 0.4s;
}

.text_field_wrapper input[type="number"]:out-of-range
{
    color: var(--color-invalid-input);
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button
{
    -webkit-appearance: none;
    margin: 0;
}

.text_field_wrapper:hover,
.text_field_wrapper:focus-within
{
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

.text_field_wrapper input[type="number"]:focus,
.text_field_wrapper input[type="number"]:hover
{
    outline: none;
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

input[type="inputText"]
{
    color: var(--color-valid-input);
    font-size: inherit;

    margin: 4px;
    padding: 7.5px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

input[type="inputText"]:focus, input[type="inputText"]:hover
{
    outline: none;
    border-color: var(--color-border-hover);
}


</style>
