<template>
    <div>
        <FeatureHead />
        <FeatureCard />
        <div class="w-full flex flex-col space-y-8 p-8 justify-center items-center">
            <div class="flex justify-center items-center flex-col space-y-6 text-center max-w-lg">
                <h2 class="text-4xl font-bold md:text-5xl">Stock libraries & collections</h2>
                <p class="text-gray-400">Get access to over 50,000 hand-picked vector graphics and icons, and 4 million
                    high-resolution stock photos.</p>
            </div>
            <div class="mx-auto flex flex-col space-y-8 justify-center items-center md:space-y-0 md:flex-row md:gap-6"
                v-for="data in stockCollections" :key="data" :class="data.reverse ? 'md:flex-row-reverse' : ' '">
                <div
                    class="md:w-2/5 justify-center text-center items-center md:justify-start md:items-start flex flex-col space-y-4 md:text-left">
                    <h3 class="font-bold text-2xl">{{ data.title }}</h3>
                    <p class="text-gray-400">{{ data.description }}</p>
                    <a class="text-orange-400 text-center border-b-2 border-orange-500 w-fit" href="">{{ data.link }}</a>
                </div>
                <div class="w-4/5 md:w-1/2 flex justify-center items-center">
                    <img :src="data.src" alt="Image-icon" class="rounded-md">
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
        src: "https://i.pinimg.com/originals/0f/09/17/0f0917cab7bd5b328ecdcadd6115b6f7.gif",
        title: "Over 4 million stock photos",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore stock photos    >",
        reverse: false
    },
    {
        src: "https://i.pinimg.com/originals/49/c6/00/49c600024ffb144052eda94fc63576b5.gif",
        title: "Over 50,000 vector graphics & icons",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore graphics & icons    >",
        reverse: true
    },
    {
        src: "https://i.pinimg.com/originals/41/5c/f0/415cf0970d8fcb55d69f25308f64f5a0.gif",
        title: "Hundreds of masks & frames",
        description: "Explore an incredible collection of high resolution stock photos available for personal and commercial use.",
        link: "Explore our collections    >",
        reverse: false
    },
])
</script>

<style  scoped>
</style>