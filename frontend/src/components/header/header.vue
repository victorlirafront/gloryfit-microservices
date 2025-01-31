<template>
  <header class="header">
    <div class="header__container">
      <div class="logo-icon">
        <p>E-commerce</p>
      </div>

      <div class="header__cart-wrapper" @click="toggleCheckout">
        <div class="header__cart" ref="cartText">
          <img class="header__cart-img" :src="IMAGES.LOGO" alt="cart icon" />
        </div>
      </div>

      <Checkout v-if="isCheckoutVisible" class="header__checkout" @closeCheckout="closeCheckout" />
    </div>
  </header>
</template>

<script lang="ts">
import Checkout from '../checkout/checkout.vue'
import { IMAGES } from '@/constants/images'

export default {
  name: 'AppHeader',
  components: {
    Checkout,
  },
  data() {
    return {
      isCheckoutVisible: false,
    }
  },
  computed: {
    IMAGES() {
      return IMAGES
    },
  },
  methods: {
    toggleCheckout() {
      this.isCheckoutVisible = !this.isCheckoutVisible
    },
    closeCheckout() {
      this.isCheckoutVisible = false
    },
  },
}
</script>

<style scoped lang="scss">
@use './header.scss' as *;
</style>
