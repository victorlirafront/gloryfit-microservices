<script setup lang="ts">
import AppHeader from './components/header/header.vue'
import AppFooter from './components/footer/footer.vue'
import { IMAGES } from '@/constants/images'
import { useCartStore } from "@/stores/cart"
import { computed } from 'vue'

const cart = useCartStore()

const { product, quantity, addToCart, removeFromCart } = cart
const total = computed(() => cart.getTotal()) // Computed para garantir a reatividade

</script>

<template>
  <AppHeader />
  <main class="main">
    <div class="card-wrapper">
      <div class="card">
        <img class="header__cart-img" :src="IMAGES.TSHIRT" alt="cart icon" />
        <p class="title">{{ product?.name }}</p>
        <p class="price">R$ {{ product?.price.toFixed(2) }}</p>

        <p>Quantidade: {{ quantity }}</p>
        <button class="add-to-cart" @click="addToCart">Adicionar ao Carrinho</button>
        <button class="remove-from-cart" @click="removeFromCart" :disabled="quantity === 0">Remover do Carrinho</button>
        <p v-if="quantity > 0"><strong>Total: R$ {{ total.toFixed(2) }}</strong></p>
        <p v-else>O carrinho está vazio.</p>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
}

button {
  margin: 10px;
  padding: 10px;
  background-color: #2f8b7d;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}
</style>
