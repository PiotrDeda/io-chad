<script setup>
const props = defineProps(
    {
        label: {type: String, required: true},
        form: {type: String, default: "form2"},
        autofocus: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false}
    });
</script>

<template>
    <div class="text_field_wrapper">
        <label>{{ label }}:</label>
        <input
            :autofocus="props.autofocus"
            :disabled="props.disabled"
            :form="props.form"
            :maxlength="props.maxLength"
            :minlength="props.minLength"
            :size="props.maxLength"
            name="inputText"
            placeholder=""
            required
            type="text"
        />
    </div>
</template>

<style scoped>
.text_field_wrapper {
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

.text_field_wrapper label {
    margin-right: 15px;
}

.text_field_wrapper input[type="text"] {
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

.text_field_wrapper:hover,
.text_field_wrapper:focus-within {
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

.text_field_wrapper input[type="text"]:focus,
.text_field_wrapper input[type="text"]:hover {
    outline: none;
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

input[type="text"] {
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

input[type="text"]:focus, input[type="text"]:hover {
    outline: none;
    border-color: var(--color-border-hover);
}
</style>
