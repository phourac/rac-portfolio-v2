<template>
  <IntroduceSection />
  <SomeRecentWork />
  <ClientOnly>
    <InfiniteScrollLoop />
  </ClientOnly>
  <LetsTalk />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import IntroduceSection from '~/components/Home/IntroduceSection.vue'
import LetsTalk from '~/components/Home/LetsTalk.vue'
import SomeRecentWork from '~/components/Home/SomeRecentWork.vue'

// Lazy load InfiniteScrollLoop
const InfiniteScrollLoop = defineAsyncComponent(
  () => import('~/components/Home/InfiniteScrollLoop.vue')
)

// Add SEO metadata

useSeoMeta({
  title: 'Than Phourac - Portfolio',
  ogTitle: 'Than Phourac - Portfolio',
  description:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogDescription:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogImage: 'https://phourac.site/images/banner.png?v=1',
  twitterImage: 'https://phourac.site/images/banner.png?v=1',
  twitterCard: 'summary_large_image'
})

useHead({
  title: 'Home - Rac',
  meta: [
    {
      name: 'description',
      content:
        'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
    },
    {
      name: 'keywords',
      content:
        'creative developer, portfolio, frontend projects, Rac, web development ,than phourac ,Than Phourac , Phourac , Phourac Than , Phourac Than , Phourac Than Phourac , Raccy ,Racy'
    },
    { name: 'author', content: 'Rac' },

    // Open Graph for social sharing
    {
      property: 'og:title',
      content: 'Home - Rac | Creative Developer & Designer'
    },
    {
      property: 'og:description',
      content:
        'Explore Rac’s latest frontend development work, creative projects, and how to get in touch.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://phourac.site/' },
    { property: 'og:image', content: 'https://phourac.site/images/banner.png' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Home - Rac' },
    {
      name: 'twitter:description',
      content:
        'Rac is a creative developer showcasing recent projects and frontend experiences.'
    },
    {
      name: 'twitter:image',
      content: 'https://phourac.site/images/banner.png'
    }
  ],
  link: [{ rel: 'canonical', href: 'https://phourac.site/' }]
})
</script>

<style scoped>
/* Minimize CSS and ensure it's scoped */
</style>
