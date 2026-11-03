import { defineConfig } from 'vite'

export default defineConfig({
 base: '/my-site/', // имя репозитория
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 3000,
  },
})
