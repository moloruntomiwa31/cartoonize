<template>
    <header class="flex justify-between items-center px-6 md:px-20 py-6 mx-auto bg-black text-white md:text-black md:bg-transparent">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                <path fill="#ff5e00"
                    d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-4.78 91.44c-16.68 35-31.06 50.56-46.65 50.56c-19.68 0-31.39-24.56-43.79-50.56C112 113 101 90 91.43 90c-3.74 0-14.37 4-32.21 41.44a8 8 0 0 1-14.44-6.88C61.46 89.59 75.84 74 91.43 74c19.68 0 31.39 24.56 43.79 50.56C144 143 155 166 164.57 166c3.74 0 14.37-4 32.21-41.44a8 8 0 1 1 14.44 6.88Z" />
            </svg>
            <h1 class="text-2xl">colorcinch</h1>
        </div>
        <nav class="md:block hidden justify-between items-center space-x-6">
            <RouterLink to="/" active-class="active" class="hover-link">Home</RouterLink>
            <RouterLink to="/features" active-class="active" class="hover-link">Features</RouterLink>
            <RouterLink to="/pricing" active-class="active" class="hover-link">Pricing</RouterLink>
            <RouterLink to="/support" active-class="active" class="hover-link">Support</RouterLink>
            <RouterLink to="/contact" active-class="active" class="hover-link">Contact Us</RouterLink>
        </nav>
        <button class="md:hidden" @click="showNav = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 17h14M5 12h14M5 7h14" />
            </svg>
        </button>
    </header>
    <nav class="overlay-wrapper" v-if="showNav" @click="showNav = false">
        <div class="overlay">
            <div class="links text-white flex flex-col h-full justify-center ml-6 mr-2 space-y-32">
            <button class="cross bg-white rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="black" fill-rule="evenodd" d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687L4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z" clip-rule="evenodd"/></svg>
            </button>
            <input type="search" class="w-full p-2 rounded-full bg-transparent border-2 border-gray-500 outline-none placeholder:text-gray-500" placeholder="Search">
            <div class="flex flex-col space-y-6">
                <RouterLink to="/" active-class="active-mobile" class="hover-link">Home</RouterLink>
                <RouterLink to="/features" active-class="active-mobile" class="hover-link">Features</RouterLink>
                <RouterLink to="/pricing" active-class="active-mobile" class="hover-link">Pricing</RouterLink>
                <RouterLink to="/support" active-class="active-mobile" class="hover-link">Support</RouterLink>
                <RouterLink to="/contact" active-class="active-mobile" class="hover-link">Contact Us</RouterLink>
            </div>

            <div class="mt-12">
                <p>&copy;All rights reserved.</p>
            </div>
        </div>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import {ref} from "vue"
const showNav = ref(false)
</script>

<style scoped>
.active {
    border-bottom: 2px solid #ff5e00;
    width: fit-content;
    transition: all 0.3s ease-in-out;
}
.active-mobile {
    color: #fe792b;
}
.overlay-wrapper {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    animation: slide 1s ease-in-out;
    backdrop-filter: blur(10px);
}
.overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0);
    height: 100vh;
    width: 60%;
    right: 0;
    transition: all 0.5s ease-in-out linear;
}
.cross {
    position: absolute;
    top: 35px;
    right: 15px;
}

@keyframes slide {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>