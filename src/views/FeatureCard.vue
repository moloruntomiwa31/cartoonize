<template>
    <div>
        <div v-if="card" class="p-8 flex flex-col justify-center space-y-12 md:space-y-0 md:flex-row items-center md:gap-4">
            <div class="flex flex-col space-y-4 max-w-[460px] md:max-w-1/4">
                <div class="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <path fill="orange"
                            d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z" />
                    </svg>
                    <h3 class="font-bold text-xl">Made for everyone</h3>
                </div>
                <h1 class="font-bold text-4xl md:text-5xl leading-8">{{ card.title }}</h1>
                <p class="text-gray-500">{{ card.description }}</p>
                <Button class="bg-orange-500 shadow-orange-400 shadow-md text-white rounded-lg p-4 w-fit">Upload photo</Button>
            </div>
            <div class="flex justify-end">
                <img :src="card.icon" alt="" class="border-orange-200 border-2 rounded-xl shadow-xl">
            </div>
        </div>
        <div v-else>
            Feature Unknown
        </div>
    </div>
</template>

<script setup>
import Button from "../components/fixed/Button.vue"
import { useRoute } from "vue-router"
import featureData from "../components/feature/feature.js"
import { ref, onMounted } from "vue"
const route = useRoute()
const { id } = route.params
const card = ref(null)
onMounted(() => {
    card.value = featureData.find(c => c.id === parseInt(id))
})
</script>

<style scoped></style>