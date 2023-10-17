// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config";
export default defineNuxtConfig({
  $production: {
  },
  $development: {
    devtools: { enabled: true },
  },
  runtimeConfig: {
    apiSecret: '12345',
    public: {
      apiBase: '/api'
    },

  },
  alias: {
    "@": "/",
  },
  typescript: {
    builder: 'vite',
    tsConfig: {
      extends: '@/.nuxt/tsconfig.json',
      compilerOptions: {
        noImplicitAny: true,
        strict: true
      }
    }
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
  css: ["@/assets/app.scss"],
  vite: {
    css: {
      // preprocessorOptions: {
      //   scss: {
      //     additionalData: '@import "@/assets/app.scss"; ',
      //   },
      // },
    },
  }
})
