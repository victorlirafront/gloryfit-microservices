<script setup lang="ts">
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'
import { useCartStore } from '@/stores/cart'
import products from './data/mock_products.json'

const cart = useCartStore()
const { addToCart } = cart

const productsWithAvailability = products.map(product => {
  if (product.size) {
    const totalStock = product.size.reduce((sum, size) => sum + size.stock, 0);
    return { ...product, available: totalStock > 0 };
  } else {
    return { ...product, available: product.quantity > 0 };
  }
});

</script>

<template>
  <AppHeader />
  <main class="main">
    <div class="card-wrapper">
      <div
        v-for="(product, index) in productsWithAvailability"
        :key="index"
        class="card"
        :class="{ available: product.available, unavailable: !product.available }"
      >
        <!-- Exibe o product no console -->
        {{ console.log('Product:', product) }}

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
