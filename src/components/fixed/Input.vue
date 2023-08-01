<template>
    <div class="flex flex-col relative w-[80%]">
        <input type="text" v-bind="$attrs"
            class="outline-none w-[100%] py-4 bg-transparent border-b-2 border-gray-400 transition-all duration-300"
            placeholder=" " :value="inputValue" @input="onInput">
        <label class="text-sm uppercase font-bold absolute h-full flex items-center duration-300 ease-linear">{{ label}}</label>
    </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue"
const props = defineProps(["label", "modelValue"])
const emit = defineEmits()
const inputValue = ref(props.modelValue);
watchEffect(() => {
    inputValue.value = props.modelValue;
});
watch(inputValue, (newValue) => {
    if (props.modelValue !== newValue) {
        emit('update:modelValue', newValue);
    }
});

function onInput(event) {
    inputValue.value = event.target.value;
    emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
input:focus+label,
input:not(:placeholder-shown)+label {
    transform: translateY(-20px);
}
</style>