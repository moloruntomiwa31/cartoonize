<template>
    <div>
        <main class="flex flex-col justify-center items-center p-6 mt-12">
            <div class="hero flex flex-col text-center space-y-10 md:w-[60%] lg:w-[60%]">
                <h1 class="text-black font-bold text-4xl md:text-5xl">A creative tool so simple, a toddler could use it.
                </h1>
                <p class="text-gray-500">Our all-in-one creative platform helps you achieve professional and stunning
                    results
                    with less time and virtually no experience.</p>
                <div class="md:flex justify-center hidden ">
                    <div class="flex justify-between items-center w-full" v-for="data of featuresHero" :key="data">
                        <div class="flex space-x-2">
                            <img :src="icon" alt="">
                            <h3 class="font-bold">{{ data }}</h3>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <video loop="1" autoplay="1" muted playsinline>
                        <source src="https://www.cartoonize.net/wp-content/uploads/2022/06/features-hero.mp4?_=1" type="video/mp4">
                    </video>
                </div>
                <div class="flex flex-col space-y-6">
                    <div class="flex justify-center"><svg class="bg-gray-100 p-2 rounded-lg shadow-lg" xmlns="http://www.w3.org/2000/svg" width="50" height="50"
                            viewBox="0 0 15 15">
                            <g fill="none" stroke="orange">
                                <path d="M3.5 2.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" />
                                <path d="M11.5.5h-8a3 3 0 0 0 0 6h8a3 3 0 1 0 0-6Zm0 12a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z" />
                                <path d="M3.5 14.5h8a3 3 0 1 0 0-6h-8a3 3 0 0 0 0 6Z" />
                            </g>
                        </svg>
                    </div>
                    <h1 class="text-black font-bold text-4xl md:text-5xl">Essential photo editing tools</h1>
                    <p class="text-gray-500">Resize, enhance and transform – use our wide selection of essential features to
                        customize and beautify your artwork.</p>
                    <div><a href="" class="text-orange-500 w-fit border-b-2 border-orange-500 text-2xl font-bold">Start
                            editing now ></a></div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import icon from "../../assets/Feature/disc.svg"
import { ref } from "vue"
const featuresHero = ref(["Essential editing tools", "Effects & cartoonizers", "Graphics & stock photos"])

</script>

<style scoped>
.hero {
    min-height: 100vh;
}
</style>