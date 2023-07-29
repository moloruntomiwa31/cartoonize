<template>
    <div class="flex flex-col space-y-14 mx-auto items-center">
        <div class="flex flex-col justify-center items-center space-y-6 md:space-y-0 md:flex-row md:gap-8"
            v-for="data in effectTab" :key="data" :class="data.reverse ? 'md:flex-row-reverse' : ' '">
            <div class="flex flex-col space-y-6 text-center md:w-[50%] md:text-left">
                <h3 class="font-bold text-3xl">{{ data.title }}</h3>
                <p class="text-gray-500">{{ data.description }}</p>
                <div>
                    <a href="" class="text-orange-500 border-b-2 w-fit border-orange-500">{{ data.link }}</a>
                </div>
            </div>
            <div class="flex justify-center mt-4 md:w-[30%] md: h-[30%] rounded-xl shadow-md">
                <img :src="data.icon" alt="" class="rounded-xl">
            </div>
        </div>
    </div>
</template>

<script setup>
import icon1 from "../assets/moreDetails/human cartoon.jpg"
import icon2 from "../assets/moreDetails/richPhoto.jpg"
import icon3 from "../assets/moreDetails/graphics.jpg"
import { ref } from "vue"

const effectTab = ref([
    {
        icon: icon1,
        title: "Adjustable cartoonizer effects & filters",
        description: "Go from photo to cartoon in one click. Turn your photos into truly unique art using our cartoonizer, sketcher and hundreds of other specialty filters and effects.",
        link: "See effects & filters in action     >",
        reverse: false
    },
    {
        icon: icon2,
        title: "Feature-rich photo and text editor",
        description: "Remove background, crop and resize, adjust or replace color – use our wide selection of tools to customize and beautify your photos.",
        link: "Explore all tools & faetures     >",
        reverse: true
    },
    {
        icon: icon3,
        title: "Over 4 million photos, graphics & icons",
        description: "Choose from the most extensive library of high-resolution stock photography, premium vector graphics, and diverse icon sets.",
        link: "Explore our collections      >",
        reverse: false
    },
])
</script>

<style scoped>

</style>