<template>
    <div>
        <FeatureHead />
        <FeatureCard />
        <div class="w-full flex flex-col space-y-8 p-8 justify-center items-center">
            <div class="flex justify-center items-center flex-col space-y-6 text-center max-w-lg">
                <h2 class="text-4xl font-bold">Stock libraries & collections</h2>
                <p class="text-gray-400">Get access to over 50,000 hand-picked vector graphics and icons, and 4 million
                    high-resolution stock photos.</p>
            </div>
            <div class="mx-auto flex flex-col space-y-8 justify-center items-center md:space-y-0 md:flex-row md:gap-6"
                v-for="data in stockCollections" :key="data" :class="data.reverse ? 'md:flex-row-reverse' : ' '">
                <div
                    class="md:w-2/5 justify-center items-center md:justify-start md:items-start flex flex-col space-y-4 md:text-left">
                    <h3 class="font-bold text-2xl">{{ data.title }}</h3>
                    <p class="text-gray-400 text-center md:text-left">{{ data.description }}</p>
                    <a class="text-orange-400 text-center border-b-2 border-orange-500 w-fit" href="">{{ data.link }}</a>
                </div>
                <div class="md:w-1/2 flex justify-center items-center">
                    <video loop="1" autoplay="1" playsinline muted>
                        <source :src="data.src" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div class="w-full bg-gray-100 p-8 h-30">
            <div class="m-w-[150px] space-y-4 text-center">
                <ReadyBanner :title="`Ready to get started?`" :text="`Try it out - it's free and no registration required.`"/>
                <Button class="text-white bg-orange-500 p-6 rounded-xl shadow-lg shadow-orange-500"></Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import FeatureHead from "../components/feature/FeatureHead.vue";
import FeatureCard from "../components/feature/FeatureCard.vue"
import Button from "../components/fixed/Button.vue"
import ReadyBanner from "../components/fixed/ReadyBanner.vue";
import { ref } from "vue"

const stockCollections = ref([
    {
        src: "https://www.cartoonize.net/wp-content/uploads/2022/06/photos.mp4?_=1",
        title: "Over 4 million stock photos",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore stock photos    >",
        reverse: false
    },
    {
        src: "https://www.cartoonize.net/wp-content/uploads/2022/06/graphics.mp4?_=1",
        title: "Over 50,000 vector graphics & icons",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore graphics & icons    >",
        reverse: true
    },
    {
        src: "https://www.cartoonize.net/wp-content/uploads/2022/06/masks.mp4?_=1",
        title: "Hundreds of masks & frames",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore our collections    >",
        reverse: false
    },
])
</script>

<style  scoped>
</style>