// https://nuxt.com/docs/api/configuration/nuxt-config
const isProdEnv = process.env.NODE_ENV === 'production'
const testServicesEndpoint = 'https://TESTENDPOINT'
const prodServicesEndpoint = 'https://PRODENDPOINT'
const servicesEndpoint = isProdEnv ? prodServicesEndpoint : testServicesEndpoint
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
    }
  },
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_ENDPOINT
      }
    },
  },
  alias: {
    "@": "/",
  },
})
