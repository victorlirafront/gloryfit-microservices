import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig as vitestDefineConfig } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Adicionar opções para SCSS aqui, se necessário
      }
    }
  },
  // @ts-ignore
  test: vitestDefineConfig({
    // @ts-ignore
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // Arquivo de configuração do Vitest, se necessário
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  })
})
