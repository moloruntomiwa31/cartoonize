<template>
    <div>
        <main class="flex flex-col  space-y-12 mt-12 mx-auto items-center p-6">
            <div
                class="max-h-[100vh] flex flex-col justify-center items-center text-center space-y-8 w-4/5 md:w-[60%] lg:w-[60%]">
                <h1 class="text-black font-bold text-4xl md:text-5xl">Edit faster & easier with Colorcinch Plus.</h1>
                <p class="text-gray-400">Go all-in with Colorcinch Plus and experience creative editing with ease and
                    virtually no learning curve. All features – one low price. Pay by month or the year. Cancel anytime.</p>
                <a href="" class="text-orange-500 w-fit border-b-2 border-orange-500 text-lg md:text-xl font-bold">Start
                    editing now ></a>
            </div>
            <PricingCards />
            <FAQ />
        </main>
        <div class="min-w-ful flex p-8 flex-col space-y-4 items-center justify-center bg-slate-100">
            <ReadyBanner :title="`Ready to go Plus?`" :text="`Create from anywhere. Cancel anytime.`" />
            <Button class="text-white bg-orange-500 p-4 rounded-xl shadow-lg shadow-orange-500">Upgrade Now</Button>
        </div>
    </div>
</template>

<script setup>
import PricingCards from '../components/pricing/PricingCards.vue';
import FAQ from "../components/pricing/FAQ.vue"
import ReadyBanner from '../components/fixed/ReadyBanner.vue';
import Button from "../components/fixed/Button.vue"
</script>

<style  scoped></style>