<script>
export default {
  methods: {
    handleCreate() {
      const name = document.getElementById('name').value.trim();
      const password = document.getElementById('password').value;
      const passwordCheck = document.getElementById('password-check').value;

      if (!name || !password || !passwordCheck) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return;
      }

      if (password !== passwordCheck) {
        alert('As senhas não coincidem!');
        return;
      }

      alert('Usuário cadastrado:', { name, password });
    }
  }
};
</script>


<template>
  <main class="signup">
    <form class="signup__form">
      <h1 class="signup__title-1">Bem vindo Ancora store!</h1>
      <h2 class="signup__title-2">Antes de continuar, faça seu cadastro.</h2>

      <div class="signup__field">
        <label class="signup__label" for="name">Nome</label>
        <input class="signup__input" type="text" id="name" placeholder="Digite seu nome" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password">Senha</label>
        <input class="signup__input" type="password" id="password" placeholder="Digite sua senha" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password-check">Confirmar Senha</label>
        <input class="signup__input" type="password-check" id="password-check" placeholder="Confirme sua senha" />
      </div>

      <button class="signup__submit" type="button" @click="handleCreate">Criar</button>
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
