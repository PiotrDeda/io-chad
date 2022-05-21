<script setup>
const props = defineProps(
    {
        items: { type: Array, default: ['o1', 'o2', 'o3'] },
        placeholder: { type: String, default: "_select_" }
    });

function _init_() {
	console.log( props.items )
}

_init_()
</script>

<template>
	<div class="drop-menu">		
		<select name="sub-menu">
			<option value="" disabled selected>{{props.placeholder}}</option>
			<option v-for="it in items" :value="it"> {{ it }} </option>
		</select>
	</div>
</template>

<style>

select{
	text-align: center;
    color: var(--chad-c-green);
    font-size: inherit;

    margin: 4px;
    padding: 5px 15px;
    background-color: var(--chad-c-background);

    border-style: solid;
    border-radius: 6px;
    border-width: 1px;
    border-color: var(--color-border);

    transition: 0.5s;
    cursor: pointer;
}

select:hover{
    color: var(--chad-c-green);
    border-color: rgb(16, 187, 255);
}

option:hover{
    border-color: var(--chad-c-border-);
    background-color: var(--chad-c-green-hover);
}

</style>