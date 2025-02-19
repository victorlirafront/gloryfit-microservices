<template>
  <main class="signup">
    <form class="signup__form">
      <h1 class="signup__title-1">Bem vindo Ancora store!</h1>
      <h2 class="signup__title-2">Antes de continuar, faça seu cadastro.</h2>

      <div class="signup__field">
        <label class="signup__label" for="email">Nome</label>
        <input class="signup__input" type="email" id="email" placeholder="Digite seu email" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="email">Email</label>
        <input class="signup__input" type="email" id="email" placeholder="Digite seu email" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password">Senha</label>
        <input class="signup__input" type="password" id="password" placeholder="Digite sua senha" />
      </div>

      <button class="signup__submit" type="submit">Entrar</button>
      <p class="signup__out-text">ou</p>

      <router-link to="/login">
        <button class="signup__signup" type="submit">Faça login</button>
      </router-link>
    </form>
  </main>
</template>

<style scoped lang="scss">
@use './signup.scss' as *;
</style>
