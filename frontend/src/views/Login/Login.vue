<template>
  <main class="login">
    <form class="login__form" @submit.prevent="handleLogin">
      <h1 class="login__title-1">Bem-vindo à Ancora Store!</h1>
      <h2 class="login__title-2">Antes de continuar, faça seu login.</h2>

      <div class="login__field">
        <label class="login__label" for="username">Usuário</label>
        <input
          v-model="username"
          class="login__input"
          type="text"
          id="username"
          placeholder="Digite seu usuário"
          required
        />
      </div>

      <div class="login__field">
        <label class="login__label" for="password">Senha</label>
        <input
          v-model="password"
          class="login__input"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          required
        />
      </div>

      <button class="login__submit" type="submit">Entrar</button>
      <p class="login__ou-text">ou</p>
      <router-link to="/signup">
        <button class="login__signup" type="button">Faça seu cadastro</button>
      </router-link>
    </form>
  </main>
</template>

<script>
import Axios from 'axios';
import { API_BASE_URL } from '@/constants/endpoints'

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    validateForm() {
      if (!this.username.trim() || !this.password.trim()) {
        alert('Por favor, preencha todos os campos!');
        return false;
      }

      if (this.password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!');
        return false;
      }

      return true;
    },

    async handleLogin() {
      if (!this.validateForm()) return;

      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)

        const response = await Axios.post(`${API_BASE_URL}/login`, formData, {
          withCredentials: true,
        });

        alert('Login bem-sucedido:');
        // this.$router.push('/home');
      } catch (error) {
        alert('Erro ao fazer login. Verifique suas credenciais.');
        console.error('Erro ao fazer login:', error.response?.data || error.message);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use './login.scss' as *;
</style>
