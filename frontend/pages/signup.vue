<template>
  <AppHeader />
  <SingUp />
  <AppFooter />
</template>

<script setup lang="ts">
import SingUp from '../src/views//signup/SignUp.vue'

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
