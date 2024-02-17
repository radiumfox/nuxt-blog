// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'
export default defineNuxtConfig({
  $production: {},
  $development: {
    devtools: { enabled: true },
  },
  runtimeConfig: {
    apiSecret: process.env.API_SECRET || '',
    public: {
      baseURL: process.env.BASE_URL || '',
    },
  },
  alias: {
    assets: '/<rootDir>/assets',
  },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxtjs/eslint-module', '@vueuse/nuxt', '@pinia/nuxt'],
})
