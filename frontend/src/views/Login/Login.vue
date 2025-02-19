<template>
  <main class="login">
    <form class="login__form">
      <h1 class="login__title-1">Bem vindo Ancora store!</h1>
      <h2 class="login__title-2">Antes de continuar, faça seu login.</h2>

      <div class="login__field">
        <label class="login__label" for="email">Email</label>
        <input class="login__input" type="email" id="email" placeholder="Digite seu email" />
      </div>

      <div class="login__field">
        <label class="login__label" for="password">Senha</label>
        <input class="login__input" type="password" id="password" placeholder="Digite sua senha" />
      </div>

      <button class="login__submit" type="submit">Entrar</button>
      <p class="login__ou-text">ou</p>
      <router-link to="/signup">
        <button class="login__signup" type="submit">Faça seu cadastro</button>
      </router-link>
    </form>
  </main>
</template>

<style scoped lang="scss">
@use './login.scss' as *;
</style>
