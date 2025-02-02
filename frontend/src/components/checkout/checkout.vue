<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed, defineEmits } from 'vue'

export default {
  name: 'Checkout',

  setup() {
    // Acesso ao store
    const cart = useCartStore()

    // Computed para acessar os produtos e o total do carrinho
    const products = computed(() => cart.products)
    const total = computed(() => cart.getTotal())

    // Definindo o evento que será emitido para o componente pai
    const emit = defineEmits()

    // Função para fechar o checkout e emitir o evento
    const closeCheckout = () => {
      // Emitindo o evento para o componente pai
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

    <!-- Exibindo o total do carrinho -->
    <p>Total: R$ {{ total.toFixed(2) }}</p>
  </div>
</template>

<style scoped lang="scss">
@use './checkout.scss' as *;
</style>
