// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt'],
    app: {
      head: {
           link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://charatoon.com/photo/335.png',
          crossorigin: 'anonymous'
        }
      ],
      title: 'PP',
      script: [
        {
          src: 'https://kit.fontawesome.com/0f88a3bac5.js',
          crossorigin: 'anonymous'
        }
      ]
    },
      postcss: {
        plugins: {
          tailwindcss: {}
    }
  },
  },

});
