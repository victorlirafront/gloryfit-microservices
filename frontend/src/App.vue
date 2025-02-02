<script setup lang="ts">
import { computed } from 'vue'
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'
import { useCartStore } from '@/stores/cart'

const cart = useCartStore()
const { products, quantity, addToCart, removeFromCart } = cart
const total = computed(() => cart.getTotal())
</script>

<template>
  <AppHeader />
  <main class="main">
    <div class="card-wrapper">
      <div v-if="products.length > 0" style="display: flex">
        <div v-for="(product, index) in products" :key="index" class="card">
          <img class="header__cart-img" :src="product.image" alt="cart icon" />
          <p class="title">{{ product.name }}</p>
          <p class="price">R$ {{ product.price.toFixed(2) }}</p>

          <p>Quantidade: {{ quantity }}</p>
          <button class="add-to-cart" @click="addToCart">Adicionar ao Carrinho</button>
          <button class="remove-from-cart" @click="removeFromCart" :disabled="quantity === 0">
            Remover do Carrinho
          </button>
          <p v-if="quantity > 0">
            <strong>Total: R$ {{ total.toFixed(2) }}</strong>
          </p>
        </div>
      </div>

      <div v-else>
        <p>Carregando produto...</p>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style src="./assets/main.css"></style>
