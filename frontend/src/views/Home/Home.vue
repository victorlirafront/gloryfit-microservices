<script lang="ts">
import { useCartStore } from '../../stores/cart'
import products from '../../data/mock_products.json'
import { calculateProductAvailability } from '@/utils/products'

const cart = useCartStore()
const { addToCart } = cart
const productsWithAvailability = calculateProductAvailability(products)

export default {
  name: 'HomeView',
}
</script>

<template>
  <main class="main">
    <div class="card-wrapper">
      <div
        v-for="(product, index) in productsWithAvailability"
        :key="index"
        class="card"
        :class="{ available: product.available, unavailable: !product.available }"
      >
        <div class="info">
          <img class="header__cart-img" :src="product.image" alt="cart icon" />
          <p class="title">{{ product.name }}</p>
          <p class="price">R$ {{ product.price.toFixed(2) }}</p>
        </div>
        <button class="add-to-cart" @click="addToCart(product.id)">
          {{ product.available ? 'Adicionar' : 'Indisponível' }}
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use './home.scss' as *;
</style>
