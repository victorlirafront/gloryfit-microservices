import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Defina o alias para o diretório 'src' corretamente
  alias: {
    '@': '/src',  // Ajuste o caminho conforme o seu projeto (use 'frontend/src')
  },

  typescript: {
    strict: true,
  },

  // Ajuste o caminho do CSS
  css: [
    '@/assets/main.css',  // Use o alias '@' para acessar os arquivos dentro de 'src/assets'
  ],

  modules: ['@pinia/nuxt'],  // Configuração de módulos
  compatibilityDate: '2025-03-01',

  nitro: {
    output: { dir: '.output' }
  },
})
