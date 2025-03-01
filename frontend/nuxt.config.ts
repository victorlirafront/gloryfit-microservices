import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  alias: {
    '@': '/src'
  },
  typescript: {
    strict: true
  },
  css: [
    '~/src/assets/main.css',
  ],
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-03-01'
})
