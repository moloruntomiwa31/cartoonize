<template>
    <div class="flex flex-col relative w-[80%]">
        <input type="text" v-bind="$attrs"
            class="outline-none w-[100%] py-4 bg-transparent border-b-2 border-gray-400 transition-all duration-300"
            placeholder=" ">
        <label for="" class="text-sm uppercase font-bold absolute h-full flex items-center duration-300 ease-linear">{{ label }}</label>
    </div>
</template>

<script setup>
defineProps(["label"])
</script>

<style scoped>
input:focus+label, 
input:not(:placeholder-shown) + label  {
    transform: translateY(-20px);
}
</style>