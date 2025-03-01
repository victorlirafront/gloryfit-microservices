<template>
  <main class="login">
    <form class="login__form" @submit.prevent="handleLogin">
      <h1 class="login__title-1">Bem-vindo à Ancora Store!</h1>
      <h2 class="login__title-2">Antes de continuar, faça seu login.</h2>

      <div class="login__field">
        <label class="login__label" for="username">Usuário</label>
        <input
          v-model="username"
          :class="{ 'login__input--error': errors.username }"
          class="login__input"
          type="text"
          id="username"
          placeholder="Digite seu usuário"
          @input="clearError('username')"
        />
      </div>

      <div class="login__field">
        <label class="login__label" for="password">Senha</label>
        <input
          v-model="password"
          :class="{ 'login__input--error': errors.password }"
          class="login__input"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          @input="clearError('password')"
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

<script lang="ts">
import Axios from 'axios'
import { API_BASE_URL } from '@/constants/endpoints'

export default {
  data(): {
    username: string
    password: string
    errors: { username: boolean; password: boolean }
  } {
    return {
      username: '',
      password: '',
      errors: {
        username: false,
        password: false,
      },
    }
  },
  methods: {
    validateForm(): boolean {
      this.errors.username = !this.username.trim()
      this.errors.password = this.password.length < 6
      return !this.errors.username && !this.errors.password
    },

    clearError(field: 'username' | 'password') {
      this.errors[field] = false
    },
    async handleLogin(): Promise<void> {
      if (!this.validateForm()) return

      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)

        await Axios.post(`${API_BASE_URL}/login`, formData, {
          withCredentials: true,
        })

        alert('Login bem-sucedido')
        // this.$router.push('/home');
      } catch (error) {
        alert('Erro ao fazer login. Verifique suas credenciais.')
        console.error('Erro ao fazer login:', error)
      }
    },
  },
}
</script>

<style scoped lang="scss">
@use './login.scss' as *;
</style>
