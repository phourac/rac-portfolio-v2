<script setup lang="ts">
import AboutmeIntro from '~/components/About/AboutmeIntro.vue'
import AboutmeIntroduce from '~/components/About/AboutmeIntroduce.vue'
import Education from '~/components/About/Education.vue'
import Freelancer from '~/components/About/Freelancer.vue'
import LetsTalk from '~/components/Home/LetsTalk.vue'

// Define SEO meta tags
useHead({
  title: 'About Me - Rac',
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
      content: 'About Me - Rac | Creative Developer & Designer'
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
    { name: 'twitter:title', content: 'About Me - Rac' },
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
</script>

<template>
  <AboutmeIntro />
  <AboutmeIntroduce />
  <Education />
  <Freelancer />
  <LetsTalk />
</template>
