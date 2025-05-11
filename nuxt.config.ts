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
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
        },
        // Open Graph (Facebook, LinkedIn, etc.)
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
        },
        {
          name: 'keywords',
          content:
            'creative developer, portfolio, frontend projects, Rac, web development ,than phourac ,Than Phourac , Phourac , Phourac Than , Phourac Than , Phourac Than Phourac , Raccy ,Racy'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://phourac.site/images/home-image/mobile.png?v=1'
        }, // Replace with your logo URL
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://phourac.site/'
        }, // Replace with your website URL
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://phourac.site/images/home-image/mobile.png?v=1'
        }, // Replace with your logo URL
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        } // Use 'summary_large_image' for large previews
      ]
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
    sitemap: 'https://phourac.site/sitemap.xml'
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
