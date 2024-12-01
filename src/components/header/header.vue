<template>
  <header class="header">
    <div class="container">
      <div class="logo-icon">
        <p>E-commerce</p>
      </div>

      <div class="cart-wrapper" @click="toggleCheckout">
        <div class="cart" ref="cartText">
          <img class="cart-img" src="../../assets/logo.svg" alt="cart icon" />
        </div>
      </div>

      <Checkout v-if="isCheckoutVisible" class="checkout" />

    </div>
  </header>
</template>

<script lang="ts">

import Checkout from '../checkout/checkout.vue';

export default {
  name: 'AppHeader',
  components: {
    Checkout,
  },
  data() {
    return {
      isCheckoutVisible: false,
    };
  },

  methods: {
    toggleCheckout() {
      this.isCheckoutVisible = !this.isCheckoutVisible;
    },
  },
};
</script>

<style scoped lang="scss">
@use './header.scss' as *;
</style>
