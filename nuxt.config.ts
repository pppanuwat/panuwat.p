// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],
    app: {
    head: {
      title: 'Shop',
      script: [
        {
          src: 'https://kit.fontawesome.com/0f88a3bac5.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  },

});
