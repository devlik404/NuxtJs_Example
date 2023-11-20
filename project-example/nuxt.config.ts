// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//routes version
routeRules:{
  '/': { prerender: true },
 
},


  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title:'vueeeeee',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },

  //modules
  modules: [
    '@nuxtjs/tailwindcss'
  ]

})
