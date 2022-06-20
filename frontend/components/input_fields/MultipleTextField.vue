<script setup>
    import { ref } from "vue";
    import MultipleTextFieldOption from "./MultipleTextFieldOption.vue";

    const props = defineProps(
    {
        form: { type: String, default: "form1" },
        tooltip: { type: String, default: "Opis" },
        placeholder: { type: String, default: "Brak opcji" },
        input_placeholder: { type: String, default: "Wpisz uczestnika" },
        minLength: {type: Number, default: 2 },
        maxLength: { type: Number, default: 30 },
        autofocus: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
    });

    const optionCount = ref(ref<Number>(0));
    const inputContent = ref();
    const optionsBox = ref();
    const optionList = ref([]);
    const teamsFormInput = ref();

    function addOption()
    {
        optionCount.value++;
        optionList.value.push(inputContent.value.value);
        teamsFormInput.value.value = JSON.stringify(optionList.value);
        inputContent.value.value = "";
    }

    const removeOptionFunction = ref((key) =>
    {
        if(!optionList.value.includes(key)) { return; }

        var index = optionList.value.indexOf(key);

        optionCount.value--;
        optionList.value.splice(index, 1);
        teamsFormInput.value.value = JSON.stringify(optionList.value);
    });
</script>

<script>
    export default
    {
        data() {
            return {
                removeOption: this.removeOptionFunction
            }
        }
    }
</script>

<template>
    <div id="main_box" >
        <span id="multiple_text_tooltip">{{ tooltip }}</span>
        <div id="options_box" ref="optionsBox">
            <div id="option_placeholder" v-if="optionCount == 0">{{ placeholder }}</div>
            <MultipleTextFieldOption v-for="el in optionList" :text="el" />
        </div>
        <div id="input_box">
            <input
                id="option_text_input"
                type="text"
                ref="inputContent"
                :placeholder="input_placeholder"
                :minlength="props.minLength"
                :maxlength="props.maxLength"
            />
            <button id="add_option_button" type="button" @click="addOption()">+</button>
        </div>
        <input :form="form" name="teams" ref="teamsFormInput" type="hidden" />
    </div>
</template>

<style scoped>
#multiple_text_tooltip
{
    color: var(--color-text);
    padding: 6px 0px;
    margin: 0px;
}

#main_box
{
    display: flex;
    flex-direction: column;
    place-items: center;

    color: var(--color-valid-input);
    font-size: inherit;

    width: 100%;

    margin: 4px;
    padding: 0px;
    background-color: transparent;

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.4s;
}

#options_box
{
    display: flex;
    flex-direction: column;
    place-items: center;

    margin: 0px;
    padding: 0px;
    padding-top: 7.5px;
    padding-bottom: 7.5px;
    width: 100%;

    border-width: 0px;
    border-top-width: 1px;
    border-style: solid;
    border-color: var(--color-border);
}

#option_placeholder
{
    color: var(--color-default-input)
}

#input_box
{
    display: flex;

    margin: 0px;
    padding: 0px;

    width: 100%;

    border-width: 0px;
    border-color: var(--color-border);
    border-top-style: solid;
    border-top-width: 1px;
}

#option_text_input
{
    color: var(--color-valid-input);
    font-size: inherit;

    padding: 10px 15px;
    background-color: transparent;

    border-width: 0px;
    width: 100%;

    transition: 0.4s;
}

#option_text_input::placeholder
{
    color: var(--color-text);
}

#option_text_input:focus, #option_text_input:hover
{
    outline: none;
    border-color: var(--color-border-hover);
}

#add_option_button
{
    color: var(--color-default-input);
    font-size: inherit;

    padding: 7.5px 15px;
    background-color: transparent;

    border-width: 0px;
    border-color: var(--color-border);
    border-left-style: solid;
    border-left-width: 1px;

    transition: 0.4s;
}

#add_option_button:hover
{
    color: var(--color-valid-input);
}

#add_option_button:active
{
    background-color: var(--color-background-soft);
    transition: 0s;
}

</style>
