<template>
  <AppHeader />
  <SingUp />
  <AppFooter />
</template>

<script setup>
import SingUp from '../src/views/signup/SignUp.vue'

definePageMeta({
  title: 'SignUp',
  meta: [
    {
      name: 'description',
      content: 'Esta é a página inicial do nosso site',
    },
  ],
})
</script>
