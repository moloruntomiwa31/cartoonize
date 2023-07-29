<template>
    <section class="flex justify-center items-center">
        <div class="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 rounded-xl  my-5 md:flex-row">
            <div class=" w-[300px] my-5 shadow-xl hover:translate-y-4 duration-200 hover:cursor-pointer" v-for="data in editFeature" :key="data">
                <img :src="data.icon" alt="" class="rounded-t-xl">
                <div class="text-center space-y-4 p-8">
                    <h3 class="font-bold">{{ data.title }}</h3>
                    <p class="text-gray-400">{{ data.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import icon1 from "../../assets/Feature/Remove-Background.png"
import icon2 from "../../assets/Feature/Crop-Resize.jpg"
import icon3 from "../../assets/Feature/Text-Masks.png"
import icon4 from "../../assets/Feature/Text-Editor.jpg"
import icon5 from "../../assets/Feature/Exposure.jpg"
import icon6 from "../../assets/Feature/Color-Vibrance.jpg"
import icon7 from "../../assets/Feature/Straighten-Flip-Rotate.jpg"
import icon8 from "../../assets/Feature/Color-Replace.png"
import icon9 from "../../assets/Feature/Detail.jpg"

const editFeature = ref([
    {
        icon: icon1,
        title: "AI background removal",
        description: "Instantly remove any background with unmatched precision and the power of AI."
    },
    {
        icon: icon2,
        title: "Crop & resize",
        description: "Easily crop and resize photos or select from predefined social media aspect ratios."
    },
    {
        icon: icon3,
        title: "Text masking",
        description: "Express your creativity with text masking – fill any text with the image of your choice"
    },
    {
        icon: icon4,
        title: "Text editor",
        description: "Customize the look of your text including color and size, letter spacing, outline, and shadow."
    },
    {
        icon: icon5,
        title: "Exposure",
        description: "Have full control over your photo’s exposure including brightness, contrast, highlights and shadows."
    },
    {
        icon: icon6,
        title: "Color & vibrance",
        description: "Make your colors pop by dialing in your hues, saturation, temperature and tint. All in a snap."
    },
    {
        icon: icon9,
        title: "Sharpen & blur",
        description: "Hone in on the details by having control over clarity, blur and sharpness of your image."
    },
    {
        icon: icon7,
        title: "Straighten, flip & rotate",
        description: "There’s a fine line between newbie and pro. With Colorcinch, that line can be adjusted."
    },
    {
        icon: icon8,
        title: "Replace any color",
        description: "Select your source color, new color and voila! Replace any color in a single click!"
    },
])
</script>

<style  scoped></style>