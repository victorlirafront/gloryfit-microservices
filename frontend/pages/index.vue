<template>
  <AppHeader />
  <HomeView />
  <AppFooter />
</template>

<script setup>
import HomeView from '~/src/views/home/home.vue';
import AppHeader from '~/src/components/header/header.vue';
import AppFooter from '~/src/components/footer/footer.vue';

definePageMeta({
  title: 'Página Inicial',
  meta: [
    {
      name: 'description',
      content: 'Esta é a página inicial do nosso site',
    },
  ],
});
</script>
