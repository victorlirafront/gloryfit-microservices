<template>
  <header class="header">
    <div class="container">
      <div class="logo-icon">
        <p>E-commerce</p>
      </div>

      <div class="cart-wrapper">
        <div class="cart">
          <img class="cart-img" src="../assets/logo.svg" alt="cart icon" />
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121214;
  color: white;
  width: 95%;
  max-width: 100vw;
  margin: 0 auto;
}

.container {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.container .logo-icon {
  font-size: 20px;
  font-weight: bold;
}

.cart-wrapper {
}

.cart-wrapper .cart {
  background: #202024;
  padding: 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
}

.cart-wrapper .cart:hover {
  filter: brightness(1.5);
}

.cart-wrapper .cart .cart-img {
  width: 24px;
  height: auto;
}
</style>
