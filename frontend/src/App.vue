<script setup lang="ts">
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'
import { useCartStore } from '@/stores/cart'
import products from './data/mock_products.json';

const cart = useCartStore()
const { addToCart } = cart
</script>

<template>
  <AppHeader />
  <main class="main">
    <div class="card-wrapper">
      <div v-for="(product, index) in products" :key="index" class="card">
        <div class="info">
          <img class="header__cart-img" :src="product.image" alt="cart icon" />
          <p class="title">{{ product.name }}</p>
            <p class="price">R$ {{ product.price.toFixed(2) }}</p>
          </div>
        <button class="add-to-cart" @click="addToCart(product.id)">Adicionar</button>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style src="./assets/main.css"></style>
