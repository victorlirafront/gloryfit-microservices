<template>
  <AppHeader />
  <Login />
  <AppFooter />
</template>

<script setup>
import Login from '../src/views/login/Login.vue'

definePageMeta({
  title: 'Login',
  meta: [
    {
      name: 'description',
      content: 'Esta é a página inicial do nosso site',
    },
  ],
})
</script>
