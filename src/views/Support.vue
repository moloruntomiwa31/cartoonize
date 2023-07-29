<template>
    <main class="w-full min-h-[120vh] md:min-h-0 md:h-[40vh] lg:h-[60vh] relative mx-autovflex flex-col p-12 space-y-6 bg-purple">
        <div class="flex flex-col justify-center items-center space-y-8">
            <h1 class="text-white font-bold text-4xl text-center">Hi. How can we help?</h1>
            <div class="w-full flex justify-center">
                <div class="w-full relative flex justify-center items-center max-w-[640px]">
                    <input type="text" class="rounded-[44px] h-[44px] pr-[40%] outline-orange-600">
                    <Button
                        class="bg-orange-500 rounded-[44px] h-[40px] w-[35%] absolute right-2 inline-block text-white md:right-[6rem] md:w-[25%]">Search</Button>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center p-6">
            <div class="absolute bottom-[-25px] flex flex-col md:flex-row justify-center items-center gap-4">
                <div v-for="(data, index) in datas" :key="data"
                    class="flex items-center flex-col justify-center md:flex-row rounded-lg p-8 bg-white text-black max-w-[80%] md:max-w-[280px] h-[180px]">
                    <div class="flex gap-4 justify-center">
                        <div>
                            <h3 class="text-bold text-2xl"> {{ index + 1 }}</h3>
                        </div>
                        <div>
                            <h3 class="font-bold text-2xl">{{ data.title }}</h3>
                            <p class="text-gray-400">{{ data.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import Button from "../components/fixed/Button.vue"
import { ref } from "vue"

const datas = ref([
    {
        title: "Getting Started",
        description: "Learn the ABCs of photo editing with Colorcinch."
    },
    {
        title: "Colorcinch tips",
        description: "Learn simple tips and tricks to improve your workflow."
    },
    {
        title: "Tutorials",
        description: "Read comprehensive tutorials on how to edit like a pro.."
    },
])
</script>

<style scoped>
    .bg-purple {
        background-color: rgb(60, 36, 60);
    }
</style>