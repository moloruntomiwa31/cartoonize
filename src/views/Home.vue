<template>
    <div>
        <main class="flex flex-col  space-y-8 mt-12 mx-auto items-center p-6">
            <div class="flex flex-col text-center space-y-6 md:w-[60%] lg:w-[60%]">
                <h1 class="text-black font-bold text-4xl md:text-5xl">Artify your photos with <span
                        class="text-orange-600">AI.</span></h1>
                <p class="text-gray-500">Instantly create, edit and turn your photos into artwork with Colorcinch – the #1
                    photo
                    editor & AI cartoonizer designed to be simple, beautiful, and free</p>
                <div class="flex justify-center">
                    <Button class="text-white bg-orange-500 p-6 rounded-xl shadow-lg shadow-orange-500">Upload Photos</Button>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <img src="https://i.pinimg.com/originals/e4/c0/dc/e4c0dc2a787b8d1e58d52ce8ec828053.gif" alt="" class="rounded-md">
            </div>
            <HomePhotoEditDetails />
            <HomeEffects />
        </main>
        <HomeBanner />
    </div>
</template>


<script setup>
import HomePhotoEditDetails from "../components/HomePhotoEditDetails.vue"
import HomeEffects from "../components/HomeEffects.vue"
import HomeBanner from "../components/HomeBanner.vue"
import Button from "../components/fixed/Button.vue"
</script>

<style scoped></style>