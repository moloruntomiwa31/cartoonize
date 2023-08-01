<template>
   <button class="hover:rotate-[-5deg] hover:duration-400" @click="handleSubmit">
    <slot>Get Started</slot>
   </button>
</template>

<script setup>
const emit = defineEmits(["click"])
const handleSubmit = (e) => {
   emit('click', e)
}
</script>

<style lang="scss" scoped>

</style>