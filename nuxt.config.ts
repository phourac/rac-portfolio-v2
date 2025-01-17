export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    // '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@hypernym/nuxt-gsap'
  ],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  compatibilityDate: '2025-01-13'
})
