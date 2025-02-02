<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed, defineEmits } from 'vue'

export default {
  name: 'Checkout',

  setup(props, { emit }){
    const cart = useCartStore()
    const products = computed(() => cart.products)
    const total = computed(() => cart.getTotal())

    const closeCheckout = () => {
      emit('closeCheckout')
    }

    return {
      products,
      total,
      closeCheckout
    }
  }
}
</script>

<template>
  <div class="checkout">
    <div class="close-wrapper">
      <p class="close-wrapper__label">Carrinho de compras</p>
      <img class="close" src="../../assets/close-btn.svg" alt="close btn" @click="closeCheckout" />
    </div>
    <p>Total: R$ {{ total.toFixed(2) }}</p>
  </div>
</template>

<style scoped lang="scss">
@use './checkout.scss' as *;
</style>
