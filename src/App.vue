<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<script setup>
  import {RouterView} from "vue-router"
  import NavBar from "./components/fixed/NavBar.vue";
  import Footer from "./components/fixed/Footer.vue";
</script>

<style scoped>

</style>