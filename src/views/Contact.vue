<template>
    <div class="flex flex-col space-y-6 justify-center md:flex-row md:gap-6 md:space-y-0 p-6">
        <div class="flex flex-col space-y-10 md:mb-32 md:w-[65%]">
            <Modal />
            <div class="flex flex-col space-y-2 md:max-w-[80%]">
                <h1 class="font-bold text-4xl md:text-5xl">Contact customer support</h1>
                <p class="text-gray-400">
                    Have a presale question? Can't find an answer to a technical question? We're here to help!
                </p>
            </div>
            <div action="" class="space-y-6">
                <div class="grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-y-0">
                    <Input :label="`full name*`" />
                    <Input :label="`order id`" type="number" />
                    {{ orderId }}
                </div>
                <div class="grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-y-0">
                    <Input :label="`email`" type="email"/>
                    <Input :label="`subject`"/>
                </div>
                <div class="relative">
                    <textarea cols="30" rows="5"
                        class="focus:outline-none border-b-2 border-gray-400 w-[80%] md:w-[40%] resize-none"
                        placeholder=" "></textarea>
                    <label for=""
                        class="text-sm uppercase font-bold absolute top-0  h-full flex items-center duration-300 ease-linear">Your
                        message</label>
                </div>
                <Button class="bg-orange-500 px-6 py-4 rounded-full text-white shadow-orange-500 shadow-md">Send
                    Message</Button>
                </div>
        </div>
        <div class="flex flex-col space-y-4 md:w-[35%]">
            <h3 class="font-bold text-2xl">Seeking partnership opportunities?</h3>
            <p class="text-gray-400">
                For business related inquiries, partnerships and collaborations, please direct your emails to our lead dept.
                at <span class="text-orange-400">team@colorcinch.com</span>. Thank you.
            </p>
        </div>
    </div>
</template>

<script setup>
import Modal from '../components/contact/Modal.vue';
import Input from "../components/fixed/Input.vue"
import Button from "../components/fixed/Button.vue"
import { reactive, computed } from "vue"
</script>

<style scoped>
textarea:focus+label,
textarea:not(:placeholder-shown)+label {
    transform: translateY(-50%);
}
</style>