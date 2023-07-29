<template>
    <h3 class="font-bold text-3xl">{{ title }}</h3>
    <p class="text-gray-500">{{ text }}</p>
</template>

<script>
export default {
    props: ['title', 'text']
}
</script>