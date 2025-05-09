<template>
  <div>
    <ContractIntro />
    <!-- <client-only> -->
    <FormContact />
    <!-- </client-only> -->
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Contact Me - Rac',
  meta: [
    {
      name: 'description',
      content:
        'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
    },
    {
      name: 'keywords',
      content:
        'creative developer, portfolio, frontend projects, Rac, web development'
    },
    { name: 'author', content: 'Rac' },

    // Open Graph for social sharing
    {
      property: 'og:title',
      content: 'Contact Me - Rac | Creative Developer & Designer'
    },
    {
      property: 'og:description',
      content:
        'Explore Rac’s latest frontend development work, creative projects, and how to get in touch.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com/' },
    { property: 'og:image', content: 'https://yourdomain.com/og-image.jpg' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Me - Rac' },
    {
      name: 'twitter:description',
      content:
        'Rac is a creative developer showcasing recent projects and frontend experiences.'
    },
    {
      name: 'twitter:image',
      content: 'https://yourdomain.com/twitter-image.jpg'
    }
  ]
})

const ContractIntro = defineAsyncComponent(
  () => import('@/components/Contact/ContactIntro.vue')
)
const FormContact = defineAsyncComponent(
  () => import('~/components/Contact/FormContact.vue')
)
</script>
