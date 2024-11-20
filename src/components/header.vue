<template>
  <header class="header">
    <div class="logo">
      <img src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="Logo" />
      <nav>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
      </nav>
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
  background-color: #fff;
  color: white;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6f61;
}
</style>
