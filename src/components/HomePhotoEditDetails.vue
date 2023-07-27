<template>
       <div class="hidden md:flex items-center justify-center md:flex-row-reverse md:gap-2">
            <div class="rounded-2xl h-[auto] w-[auto] flex flex-col space-y-2 text-left p-4 md:w-1/3" v-for="data in photoEditingDeatils" :key="data">
                <img :src="data.icon" alt="" class="w-8">
                <h4 class="text-black font-bold text-2xl">{{ data.title }}</h4>
                <p class="text-gray-500">{{ data.description }}</p>
            </div>
        </div>
        <div class="block md:hidden">
            <Swiper :modules="[EffectCube, Pagination]" :follow-finger="true" effect="cube" :loop="true" :grabCursor="true" :pagination="true"
       class="items-center justify-center space-y-4">
            <SwiperSlide class="rounded-2xl h-[auto] w-[auto] flex flex-col space-y-2 text-left p-6" v-for="data in photoEditingDeatils" :key="data">
                <img :src="data.icon" alt="" class="w-8">
                <h4 class="text-black font-bold text-xl">{{ data.title }}</h4>
                <p class="text-gray-500">{{ data.description }}</p>
            </SwiperSlide>
        </Swiper >
        </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {EffectCube, Pagination} from "swiper/modules"
import 'swiper/css/effect-cube'
import "swiper/css/pagination"
import 'swiper/css';  
import { reactive } from "vue"
import icon1 from "../assets/photoEditimg/icon1.svg"
import icon2 from "../assets/photoEditimg/icon2.svg"
import icon3 from "../assets/photoEditimg/icon3.svg"

const photoEditingDeatils = reactive([
    {
        icon: icon1,
        title: "An intuitive interface",
        description: "Photo editing shouldn't be complicating. Colorcinch is made to be simple, intuitive and productive."
    },
    {
        icon: icon2,
        title: "Smarter editing with AI",
        description: "Better results, fewer clicks. Experience the beauty of AI-powered photo effects and editing tools."
    },
    {
        icon: icon3,
        title: "Available online & offline",
        description: "Quickly access your projects and resume editing from anywhere in the world. Online and offline."
    }
])
</script>

<style scoped>
.swiper {
    width: 300px;
    height: 300px;
    overflow: visible;
}
.swiper div {
    width: 80%;
    height: 80%;
}
.swiper-pagination-bullet-active {
    background: rgb(255, 106, 0);
}
</style>