<template>
  <main class="signup">
    <form class="signup__form" @submit.prevent="handleCreate">
      <h1 class="signup__title-1">Bem vindo à Ancora Store!</h1>
      <h2 class="signup__title-2">Antes de continuar, faça seu cadastro.</h2>

      <div class="signup__field">
        <label class="signup__label" for="name">Nome</label>
        <input v-model="name" class="signup__input" type="text" id="name" placeholder="Digite seu nome" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password">Senha</label>
        <input v-model="password" class="signup__input" type="password" id="password" placeholder="Digite sua senha" />
      </div>

      <div class="signup__field">
        <label class="signup__label" for="password-check">Confirmar Senha</label>
        <input v-model="passwordCheck" class="signup__input" type="password" id="password-check" placeholder="Confirme sua senha" />
      </div>

      <button class="signup__submit" type="submit">Criar</button>
      <p class="signup__out-text">ou</p>

      <router-link to="/login">
        <button class="signup__signup" type="button">Faça login</button>
      </router-link>
    </form>
  </main>
</template>

<script>
import Axios from "axios";
import { API_BASE_URL } from "@/constants/endpoints";

export default {
  data() {
    return {
      name: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    validateForm() {
      if (!this.name.trim() || !this.password || !this.passwordCheck) {
        alert("Por favor, preencha todos os campos!");
        return false;
      }

      if (this.password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        return false;
      }

      if (this.password !== this.passwordCheck) {
        alert("As senhas não coincidem!");
        return false;
      }

      return true;
    },
    async handleCreate() {
      if (!this.validateForm()) return;

      try {
        const formData = new FormData();
        formData.append("username", this.name);
        formData.append("password", this.password);

        await Axios.post(`${API_BASE_URL}/register`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });

        this.$router.push("/login");


      } catch (err) {
        alert("Erro ao criar conta. Tente novamente mais tarde.");
        console.error(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@use "./signup.scss" as *;
</style>
