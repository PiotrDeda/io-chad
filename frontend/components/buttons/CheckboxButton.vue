<script setup>
const props = defineProps(
    {
        label: {type: String, required: true},
        checked: {type: Boolean, default: false}
    });

// Unfortunately, "checked" prop is not properly assigned to
// "checked" attribute, so we have to use a dirty hack also
// known as bitwise XOR to get the correct "checked" status.
//
// It is also worth noting that Vue props are read-only,
// hence we use an attribute in the first place.
function _init() {
    return {checked: props.checked};
}

function changeCheckedStatus() {
    this.checked = !(this.checked);
    console.log(`${props.label} isChecked = ${this.checked ^ props.checked}`);
    document.getElementById(props.label).checked = this.checked;
}

function getCheckedStatus() {
    return this.checked ^ props.checked;
}


_init();
</script>

<template>
    <div class="checkbox_wrapper" @click="changeCheckedStatus()">
        <input
            :checked="props.checked"
            :id="props.label"
            :name="props.label"
            type="checkbox"
        />
        <label>{{ label }}</label>
    </div>
</template>

<style scoped>
.checkbox_wrapper {
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
    border-color: var(--color-border);

    cursor: pointer;
    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"] {
    margin-right: 5px;
    cursor: pointer;
}

.checkbox_wrapper:hover
{
    border-color: var(--color-border-hover);
}

.checkbox_wrapper input[type="checkbox"]:checked + label {
    color: var(--color-valid-input);
    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"] + label {
    color: var(--color-text);
    cursor: pointer;

    /* Prevent text selection */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition: 0.4s;
}
</style>
