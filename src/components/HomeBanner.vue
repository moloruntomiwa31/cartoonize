<template>
    <article>
        <div class="edit flex w-full justify-center">
            <div class="flex flex-col space-y-4 p-8 text-center">
                <h2 class="text-3xl font-bold">Start editing with ease.</h2>
                <p class="text-gray-600">No sign up required, no experience neede!</p>
                <div class="flex justify-center">
                    <Button class="bg-gray-200 p-4 rounded-lg shadow-2xl">Get Started</Button>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
import Button from "../components/fixed/Button.vue"
</script>

<style scoped>
    .edit {
    background-image: url("../assets/blob-scene-haikei.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>