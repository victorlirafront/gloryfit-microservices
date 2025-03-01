<template>
  <main class="signup">
    <form class="signup__form" @submit.prevent="handleCreate">
      <h1 class="signup__title-1">Bem-vindo à Ancora Store!</h1>
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
import Toastify from 'toastify-js'

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

      if (this.errors.name) {
        this.showToast('Nome é obrigatório', 'red')
      } else if (this.errors.password) {
        this.showToast('A senha deve ter no mínimo 6 caracteres', 'red')
      } else if (this.errors.passwordCheck) {
        this.showToast('As senhas não coincidem', 'red')
      }

      return !Object.values(this.errors).includes(true)
    },

    clearError(field: keyof typeof this.errors) {
      this.errors[field] = false
    },

    showToast(message: string, backgroundColor: string): void {
      Toastify({
        text: message,
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
          fontSize: '14px',
          background: backgroundColor,
          color: '#fff',
          fontWeight: 'bold',
          marginTop: '100px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          borderRadius: '4px'
        },
      }).showToast()
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

        this.showToast('Cadastro realizado com sucesso!', '#28a745')
        this.$router.push('/login')
      } catch (err) {
        this.showToast('Erro ao cadastrar. Tente novamente.', 'red')
        console.error('Erro ao cadastrar:', err)
      }
    },
  },
}
</script>

<style scoped lang="scss">
@use './signup.scss' as *;
</style>
