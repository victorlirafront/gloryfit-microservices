<script lang="ts">
import { useCartStore } from '@/stores/cart'
import { computed, defineEmits } from 'vue'

export default {
  name: 'Checkout',

  setup(props, { emit }) {
    const cart = useCartStore()
    const { removeFromCart } = cart

    // Computed para acessar os produtos do carrinho e calcular a quantidade total
    const products = computed(() => cart.products)
    const cartItems = computed(() => cart.cartItems)
    const quantity = computed(() =>
      cart.cartItems.reduce((total, item) => total + item.quantity!, 0),
    )
    const total = computed(() => cart.getTotal())

    // Função para fechar o checkout
    const closeCheckout = () => {
      emit('closeCheckout')
    }

    return {
      products,
      cartItems,
      quantity,
      total,
      closeCheckout,
      removeFromCart,
    }
  },
}
</script>

<template>
  <div class="checkout">
    <div class="close-wrapper">
      <p class="close-wrapper__label">Carrinho de compras</p>
      <img class="close" src="../../assets/close-btn.svg" alt="close btn" @click="closeCheckout" />
    </div>

    <div class="cart-products">
      <div v-for="(product, index) in cartItems" :key="index" class="cart-product">
        <img :src="product.image" alt="teste" />
        <div class="info-wrapper">
          <p class="product-name">{{ product.name }}</p>
          <p class="product-price">R$ {{ product.price }}</p>
          <p class="remove-product" @click="removeFromCart(product.id)">Remover</p>
        </div>
      </div>
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
    <button class="finish-checkout">Finalizar Compra</button>
  </div>
</template>

<style scoped lang="scss">
@use './checkout.scss' as *;
</style>
