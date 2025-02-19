<script setup lang="ts">
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'

</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style src="./assets/main.css"></style>
