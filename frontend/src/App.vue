<script setup lang="ts">
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'
import { IMAGES } from '@/constants/images'
</script>

<template>
  <AppHeader />
  <main class="main">
    <div class="card-wrapper">
      <div class="card">
        <img class="header__cart-img" :src="IMAGES.TSHIRT" alt="cart icon" />
        <p class="title">Camiseta Ignite Lab</p>
        <p class="price">R$ 79,99</p>
        <button class="add-to-cart">Adicionar</button>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped></style>
