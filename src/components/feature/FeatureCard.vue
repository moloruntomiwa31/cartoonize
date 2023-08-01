<template>
    <section class="flex justify-center items-center">
        <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 rounded-xl  my-5 md:flex-row">
            <div @click="router.push(`/features/edittools/${data.id}`)"
                class=" w-[300px] my-5 shadow-xl hover:translate-y-4 duration-200 hover:cursor-pointer"
                v-for="data in featureData" :key="data">
                <div class="relative">
                    <img :src="data.icon" alt="" class="rounded-t-xl">
                    <svg class="absolute bottom-[-1px] w-full h-5" xmlns="http://www.w3.org/2000/svg" version="1.1"
                        viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L0 90 C40 -30 60 -30 100 90 L100 100 Z" fill="#ffffff"></path>
                    </svg>
                </div>
                <div class="text-center space-y-4 p-8">
                    <h3 class="font-bold">{{ data.title }}</h3>
                    <p class="text-gray-400">{{ data.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import featureData from "./feature"
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<style  scoped></style>