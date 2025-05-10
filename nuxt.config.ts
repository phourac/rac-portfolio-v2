export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: '~/plugins/gsap.client.js', mode: 'client' }],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en' // Set the language attribute for the <html> tag
      },
      title: 'Rac Portfolio', // default fallback title
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1'
    }
  },
  css: [
    '~/assets/css/main.css',
    'locomotive-scroll/dist/locomotive-scroll.css' // Add this to the existing array
  ],
  modules: [
    // '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag'
  ],
  robots: {
    allow: '/',
    disallow: '/admin',
    sitemap: 'https://phourac.site/sitemap_index.xml'
  },
  site: {
    url: 'https://phourac.site',
    name: 'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
  },
  gtag: {
    enabled: true,
    id: 'G-NVQY0756MX'
  },
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
