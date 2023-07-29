<template>
         <div class="flex justify-center items-center p-6">
            <div class="absolute bottom-[-25px] flex flex-col md:flex-row justify-center items-center gap-4">
                <div v-for="(data, index) in datas" :key="data"
                    class="flex items-center flex-col justify-center md:flex-row rounded-lg p-8 bg-white text-black max-w-[80%] md:max-w-[280px] h-[180px]">
                    <div class="flex gap-4 justify-center">
                        <div>
                            <h3 class="text-bold text-lg"> {{ index + 1 }}</h3>
                        </div>
                        <div>
                            <h3 class="font-bold text-2xl">{{ data.title }}</h3>
                            <p class="text-gray-500">{{ data.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>
    import { ref } from "vue"

const datas = ref([
    {
        title: "Getting Started",
        description: "Learn the ABCs of photo editing with Colorcinch."
    },
    {
        title: "Colorcinch tips",
        description: "Learn simple tips and tricks to improve your workflow."
    },
    {
        title: "Tutorials",
        description: "Read comprehensive tutorials on how to edit like a pro.."
    },
])
</script>

<style scoped>

</style>