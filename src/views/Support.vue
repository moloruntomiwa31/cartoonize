<template>
    <div>
        <main
            class="w-full min-h-[120vh] md:min-h-0 md:h-[40vh] lg:h-[60vh] relative mx-autovflex flex-col p-12 space-y-6 bg-purple">
            <div class="flex flex-col justify-center items-center space-y-8">
                <h1 class="text-white font-bold text-4xl text-center">Hi. How can we help?</h1>
                <div class="w-full flex justify-center">
                    <div class="w-[80%] relative flex justify-center items-center max-w-[640px]">
                        <input type="text" class="rounded-[44px] h-[44px] pr-[40%] outline-orange-600 px-4"
                            placeholder="Search..">
                        <input type="submit" value="Search" class="bg-orange-500 rounded-[44px] h-[40px] w-[35%] absolute right-[-12%] inline-block text-white md:right-[6rem] md:w-[25%] cursor-pointer">
                    </div>
                </div>
            </div>
            <SupportFeatures />
        </main>
        <div class="flex flex-col space-y-4 bg-gray-100">
            <ReadyBanner :title="`Can't find what you're looking for?`" class="p-10 mt-8 text-center" />
            <div class="flex justify-center">
                <Button class="shadow-xl p-6 bg-white w-fit m-4">Submit a request</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "../components/fixed/Button.vue"
import SupportFeatures from "../components/support/SupportFeatures.vue";
import ReadyBanner from "../components/fixed/ReadyBanner.vue"
</script>

<style scoped>
.bg-purple {
    background-color: rgb(36, 17, 36);
}
</style>