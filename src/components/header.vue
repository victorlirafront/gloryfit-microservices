<template>
  <header class="header">
    <div class="container">
      <div class="logo-icon">
        <p>E-commerce</p>
      </div>

      <div class="cart-wrapper" @click="toggleCheckout">
        <div class="cart" ref="cartText">
          <img class="cart-img" src="../assets/logo.svg" alt="cart icon" />
        </div>
      </div>

      <!-- No Vue.js, a diretiva v-if é usada para renderizar condicionalmente um elemento no DOM. Isso significa que o elemento só será incluído no DOM se a expressão associada ao v-if for avaliada como true. -->
      <div class="checkout" v-if="isCheckoutVisible"></div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  // A função data() em um componente Vue é usada para definir o estado reativo do componente. O que você retorna dentro dessa função estará disponível como propriedades reativas dentro do componente, e qualquer alteração nessas propriedades causará uma atualização automática da interface do usuário.
  data() {
    return {
      isCheckoutVisible: false,
    };
  },

  //Funções que são interações do usuário (como eventos de clique, mudança de input, etc.) geralmente vão dentro de methods.
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
