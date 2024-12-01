<template>
  <div class="checkout">
    <div class="close-wrapper">
      <p>Carrinho de compras</p>
      <img
        class="close"
        src="../../assets/close-btn.svg"
        alt="close btn"
        @click="closeCheckout"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Checkout',
  methods: {
    closeCheckout() {
      // Emite um evento chamado 'closeCheckout' para o componente pai
      this.$emit('closeCheckout');
    },
  },
};
</script>

<style scoped lang="scss">
@use './checkout.scss' as *;
</style>
