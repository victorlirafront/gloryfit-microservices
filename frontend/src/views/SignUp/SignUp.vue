<template>
  <main class="signup">
    <form class="signup__form" @submit.prevent="handleCreate">
      <h1 class="signup__title-1">Bem vindo à Ancora Store!</h1>
      <h2 class="signup__title-2">Antes de continuar, faça seu cadastro.</h2>

      <div class="signup__field">
        <label class="signup__label" for="name">Nome</label>
        <input
          v-model="name"
          :class="{ 'signup__input--error': errors.name }"
          class="signup__input"
          type="text"
          id="name"
          placeholder="Digite seu nome"
          @input="clearError('name')"
        />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password">Senha</label>
        <input
          v-model="password"
          :class="{ 'signup__input--error': errors.password }"
          class="signup__input"
          type="password"
          id="password"
          placeholder="Digite sua senha"
          @input="clearError('password')"
        />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password-check">Confirmar Senha</label>
        <input
          v-model="passwordCheck"
          :class="{ 'signup__input--error': errors.passwordCheck }"
          class="signup__input"
          type="password"
          id="password-check"
          placeholder="Confirme sua senha"
          @input="clearError('passwordCheck')"
        />
      </div>

      <button class="signup__submit" type="submit">Criar</button>
      <p class="signup__out-text">ou</p>

      <router-link to="/login">
        <button class="signup__signup" type="button">Faça login</button>
      </router-link>
    </form>
  </main>
</template>

<script lang="ts">
import Axios from 'axios'
import { API_BASE_URL } from '@/constants/endpoints'

export default {
  data() {
    return {
      name: '',
      password: '',
      passwordCheck: '',
      errors: {
        name: false,
        password: false,
        passwordCheck: false,
      },
    }
  },
  methods: {
    validateForm() {
      this.errors.name = !this.name.trim()
      this.errors.password = this.password.length < 6
      this.errors.passwordCheck = this.password !== this.passwordCheck

      return !Object.values(this.errors).includes(true)
    },
    clearError(field: keyof typeof this.errors) {
      this.errors[field] = false
    },
    async handleCreate(): Promise<void> {
      if (!this.validateForm()) return

      try {
        const formData = new FormData()
        formData.append('username', this.name)
        formData.append('password', this.password)

        await Axios.post(`${API_BASE_URL}/register`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        })

        this.$router.push('/login')
      } catch (err) {
        console.error(err)
      }
    },
  },
}
</script>

<style scoped lang="scss">
@use './signup.scss' as *;
</style>
