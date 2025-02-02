<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed, defineEmits } from 'vue'

export default {
  name: 'Checkout',

  setup(props, { emit }){
    const cart = useCartStore()
    const products = computed(() => cart.products)
    const quantity = computed(() => cart.cartItems.reduce((total, item) => total + item.quantity, 0))
    const total = computed(() => cart.getTotal())

    const closeCheckout = () => {
      emit('closeCheckout')
    }

    return {
      products,
      quantity,
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
    <div class="checkout-price-wrapper">
      <div class="left-labels">
        <p>Quantidade</p>
        <p>Valor Total</p>
      </div>
      <div class="right-values">
        <p>{{ quantity }} itens</p>
        <p>R$ {{ total.toFixed(2) }}</p>
      </div>
    </div>
    <button class="finish-checkout">Finalizar  Contra</button>
  </div>
</template>

<style scoped lang="scss">
@use './checkout.scss' as *;
</style>
