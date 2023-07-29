<template>
    <div class="w-full mx-auto grid gap-8 place-items-center grid-cols-1 md:flex md:justify-center">
        <div v-for="(data, index) in plans" :key="data" :class="{change : index === 1 }"
            class="flex flex-col justify-center items-center text-center space-y-8 rounded-2xl bg-gray-200 border-1 py-12 px-6 border-purple-400 shadow-xl md:w-[300px]">
            <div>
                <h3 class="font-bold text-2xl">{{ data.planName }}</h3>
                <p class="text-gray-600 text-sm">{{ data.billing }}</p>
            </div>
            <div class="flex gap-2 items-center">
                <div class="font-bold text-3xl">$</div>
                <div class="font-bold text-5xl">{{ data.monthlyCharge }}</div>
                <div class="grid place-items-start">
                    <p class="font-bold">99</p>
                    <p>month</p>
                </div>
            </div>
            <div class="grid place-items-center grid-cols-1 space-y-4">
                <p class="text-gray-600">All Plus features</p>
                <p class="text-gray-600">All graphics collections</p>
                <p class="text-gray-600">Unlimited Projects</p>
            </div>
            <Button class="uppercase font-bold bg-orange-500 rounded-lg text-white p-4">Upgrade Now</Button>
        </div>
    </div>
</template>

<script setup>
import Button from "../fixed/Button.vue"
import {reactive} from "vue"
const plans = reactive([
    {
        planName: "Annaul Plan",
        billing: "Billied annaully at $59.88",
        monthlyCharge: 4
    },
    {
        planName: "Monthly Plan",
        billing: "Billied monthly at $8.99",
        monthlyCharge: 8
    },
])
</script>

<style scoped>
    .border-1 {
        border-width: 1px;
    }
    .change {
        background-color: white;
        border: none;
    }
    .change button {
        color: rgb(255, 136, 0);
        background: transparent;
    }
</style>