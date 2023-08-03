<template>
    <div class="w-full space-y-12">
        <h2 class="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div class="grid place-items-center gap-4 mt-12 w-full">
            <div @click="faq.open = !faq.open" v-for="faq in faqs" :key="faq"
                class="focus:outline-none transition-all duration-1000 ease-in-out select-none w-full max-w-[640px] bg-gray-100 border-1 border-black p-4 relative cursor-pointer">
                <div class="liner" :class="faq.open ? 'bg-orange-500' : 'bg-gray-600'"></div>
                <div class="question duration-1000 ease-linear transition-all font-bold ml-4">{{ faq.question }}</div>
                <div class="text-gray-500 ml-4 mt-4 max-h-[1000px] duration-700" v-if="faq.open"
                    :class="faq.open ? 'block' : 'hidden'">{{ faq.answer }}</div>
            </div>
        </div>
        <div class="flex justify-center"><a href="" class="text-gray-600 text-center">For additional questions about
                Colorcinch Plus, feel free to <span class="text-orange-500">contact us.</span></a></div>
    </div>
</template>

<script setup>
import { ref } from "vue"
const faqs = ref([
    {
        question: "How much does Colorcinch cost and can I try it for free?",
        answer: "We offer 2 different account types. Our Basic account is free to use, requires no registration, and provides access to numerous essential effects and features.",
        open: false
    },
    {
        question: "Can I cancel my subscription or switch to a different billing plan at anytime?",
        answer: "Yes! You can cancel your monthly or annual subscription at anytime. You may also switch from monthly to annual billing (or vice versa) at anytime from your Colorcinch Plus account.",
        open: false
    },
    {
        question: "Do I have to create an account to use Colorcinch?",
        answer: "No, you don't need to create an account to use Colorcinch Basic. Creating an account is only necessary when you upgrade to Colorcinch Plus in order to manage your projects and subscription.",
        open: false
    },
])
</script>

<style scoped>
.liner {
    position: absolute;
    height: 30%;
    width: 3px;
    left: 5px;
    top: 35%;
}

.border-1 {
    border-width: 1px;
    border-color: rgb(230, 226, 226);
    border-radius: 8px;
}
</style>