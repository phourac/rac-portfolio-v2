<template>
  <WorkDetails />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug as string

const seoTitle = `${slug} | Than Phourac - Portfolio`
const seoDescription = `Explore Rac’s work on ${slug}, showcasing frontend development and creative projects.`
const seoUrl = `https://phourac.site/${slug}`
const seoImage = 'https://phourac.site/images/banner.png'

useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  ogImage: seoImage,
  twitterImage: seoImage,
  twitterCard: 'summary_large_image'
})

useHead({
  title: seoTitle,
  meta: [
    {
      name: 'description',
      content: seoDescription
    },
    {
      name: 'keywords',
      content: `${slug}, creative developer, portfolio, frontend projects, Rac, web development, than phourac`
    },
    { name: 'author', content: 'Rac' },

    // Open Graph for social sharing
    {
      property: 'og:title',
      content: seoTitle
    },
    {
      property: 'og:description',
      content: seoDescription
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: seoUrl },
    { property: 'og:image', content: seoImage },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle },
    {
      name: 'twitter:description',
      content: seoDescription
    },
    {
      name: 'twitter:image',
      content: seoImage
    }
  ],
  link: [{ rel: 'canonical', href: seoUrl }]
})
</script>
