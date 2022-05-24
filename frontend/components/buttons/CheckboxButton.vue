<script setup>
    const props = defineProps(
    {
        label: { type: String, required: true },
        checked: { type: Boolean, default: false }
    });

    // Unfortunately, "checked" prop is not properly assigned to
    // "checked" attribute, so we have to use a dirty hack also
    // known as bitwise XOR to get the correct "checked" status.
    //
    // It is also worth noting that Vue props are read-only,
    // hence we use an attribute in the first place.
    function _init()
    {
        return { checked: props.checked };
    }

    function changeCheckedStatus()
    {
        this.checked = !(this.checked);
        console.log(`${props.label} isChecked = ${this.checked ^ props.checked}`);
<<<<<<< HEAD
        document.getElementById(props.label).checked = this.checked
=======
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)
    }

    function getCheckedStatus()
    {
        return this.checked ^ props.checked;
<<<<<<< HEAD
    } 
=======
    }
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)

    _init();
</script>

<template>
<<<<<<< HEAD
    <div class="checkbox_wrapper" @click="changeCheckedStatus()">
        <input
            type="checkbox"
            :id="props.label"
            :name="props.label"
            :checked="props.checked"
        />
        <label>{{ label }}</label>
=======
    <div class="checkbox_wrapper">
        <input
            type="checkbox"
            :name="props.label"
            :checked="props.checked"
            @click="changeCheckedStatus()"
        />
        <label :for="props.label">{{ label }}</label>
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)
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

<<<<<<< HEAD
    cursor: pointer;

=======
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)
    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"]
{
    margin-right: 5px;
<<<<<<< HEAD
    cursor: pointer;
}

.checkbox_wrapper:hover
{
    border-color: var(--chad-c-border-hover);
=======
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)
}

.checkbox_wrapper input[type="checkbox"]:checked + label
{
    color: var(--chad-c-green);
    transition: 0.4s;
}

.checkbox_wrapper input[type="checkbox"] + label
{
    color: var(--chad-c-gray);
<<<<<<< HEAD
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
=======
    transition: 0.4s;
}

</style>
>>>>>>> 2fc2f8e (	new file:   frontend/components/buttons/CheckboxButton.vue)
