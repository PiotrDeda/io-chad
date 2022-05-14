<script setup>
    const props = defineProps(
    {
        label: { type: String, required: true },
        checked: { type: Boolean, defaults: false }
    });

    function changeCheckedStatus()
    {
        props.checked = !(props.checked);
    }

    function getCheckedStatus()
    {
        return props.checked;
    }
</script>

<template>
    <div class="checkbox_wrapper">
        <input type="checkbox" name="es" :checked="checked" />
        <label for="es">{{ label }}</label>
    </div>
</template>

<style scoped>
.checkbox_wrapper
{
    display: flex;
    flex-direction: row;

    text-align: center;
    font-size: inherit;

    margin: 4px;
    padding: 5px 15px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--chad-c-border);

    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"]
{
    margin-right: 5px;
}

.checkbox_wrapper input[type="checkbox"]:checked + label
{
    color: var(--chad-c-green);
    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"] + label
{
    color: var(--chad-c-gray);
    transition: 0.4s;
}

</style>
