<template>
    <div class="text-center">
        <h3 class="font-bold text-3xl">{{ title }}</h3>
        <p class="text-gray-500">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'text']
}
</script>