<script setup>
    const props = defineProps(
    {
        label: { type: String, required: true },
        value: { type: Number, default: 0 },
        form: { type: String, default: "form1" },
        min: { type: Number, default: -999999 },
        max: { type: Number, default: 999999 },
        disabled: { type: Boolean, default: false }
    });

</script>

<template>
    <div class="integer_field_wrapper">
        <label>{{ label }}:</label>
        <input
            type="number"
            :id="props.label"
            :form="props.form"
            :name="props.label"
            :min="props.min"
            :max="props.max"
            :disabled="props.disabled"
            :value="props.value"
            required
        />
    </div>
</template>

<style scoped>

.integer_field_wrapper
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

.integer_field_wrapper label
{
    margin-right: 15px;
}

.integer_field_wrapper input[type="number"]
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

.integer_field_wrapper input[type="number"]:out-of-range
{
    color: var(--color-invalid-input);
}

input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button
{
    -webkit-appearance: none;
    margin: 0;
}

.integer_field_wrapper:hover,
.integer_field_wrapper:focus-within
{
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

.integer_field_wrapper input[type="number"]:focus,
.integer_field_wrapper input[type="number"]:hover
{
    outline: none;
    border-color: var(--color-border-hover);
    transition: 0.4s;
}

</style>
