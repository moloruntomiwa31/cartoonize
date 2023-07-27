<template>
    <footer class="md:hidden w-full flex items-center justify-center flex-col bg-black space-y-6 p-6 text-gray-100 text-center">
        <div>
            <a href="">Product of eWeek LLC</a>
        </div>
        <p>&copy;Colorcinch. All Rights Reserved.</p>
        <div class="flex gap-1 justify-center underline">
            <a href="">Terms of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Disclaimers</a>
        </div>
    </footer>
    <footer class="hidden md:flex flex-row items-center justify-around bg-black text-white p-8">
        <div>
            <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
                <path fill="#ff5e00"
                    d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-4.78 91.44c-16.68 35-31.06 50.56-46.65 50.56c-19.68 0-31.39-24.56-43.79-50.56C112 113 101 90 91.43 90c-3.74 0-14.37 4-32.21 41.44a8 8 0 0 1-14.44-6.88C61.46 89.59 75.84 74 91.43 74c19.68 0 31.39 24.56 43.79 50.56C144 143 155 166 164.57 166c3.74 0 14.37-4 32.21-41.44a8 8 0 1 1 14.44 6.88Z" />
            </svg>
            <h1 class="text-2xl">colorcinch</h1>
        </div>
        </div>
        <div class="flex gap-8">
            <div class="flex flex-col space-y-4">
                <h3 class="text-xl font-medium">Product</h3>
                <a href="" class="text-gray-300 hover:text-white">Home</a>
                <a href="" class="text-gray-300 hover:text-white">Get Started</a>
                <a href="" class="text-gray-300 hover:text-white">Features</a>
                <a href="" class="text-gray-300 hover:text-white">Pricing</a>
            </div>
            <div class="flex flex-col space-y-4">
                <h3 class="text-xl font-medium">Company</h3>
                <a href="" class="text-gray-300 hover:text-white">About Us</a>
                <a href="" class="text-gray-300 hover:text-white">Leadership</a>
                <a href="" class="text-gray-300 hover:text-white">Careers</a>
                <a href="" class="text-gray-300 hover:text-white">Contact Us</a>
            </div>
            <div class="flex flex-col space-y-4">
                <h3 class="text-xl font-medium">Company</h3>
                <a href="" class="text-gray-300 hover:text-white">Getting Started</a>
                <a href="" class="text-gray-300 hover:text-white">Online Cartoonizer</a>
                <a href="" class="text-gray-300 hover:text-white">FAQ</a>
                <a href="" class="text-gray-300 hover:text-white">Support</a>
            </div>
        </div>
        <div class="space-y-4">
            <h3 class="text-xl font-medium">Subscribe to our newsletter</h3>
            <input type="text" class="text-md bg-transparent border-b-2 border-white outline:none" placeholder="Enter your emai     ->">
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
    footer {
        min-height: 30vh;
    }
    footer a {
        font-size: 0.8rem;
    }
</style>