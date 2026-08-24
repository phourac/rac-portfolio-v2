<template>
  <div>
    <!-- 1. Company Projects (First) -->
    <CompanyWork />
    <CompanyProjects />

    <!-- 2. Freelance Projects (Second) -->
    <div v-if="freelanceProjects && freelanceProjects.length > 0">
      <FreelanceWork />
      <FreelanceProjects />
    </div>

    <!-- 3. Personal Projects (Third) -->
    <PersonalWork />
    <Projects />

    <!-- Contact CTA -->
    <LetsTalk />
  </div>
</template>

<script setup lang="ts">
import LetsTalk from '~/components/Home/LetsTalk.vue'
import CompanyProjects from '~/components/Work/CompanyProjects.vue'
import CompanyWork from '~/components/Work/CompanyWork.vue'
import FreelanceProjects from '~/components/Work/FreelanceProjects.vue'
import FreelanceWork from '~/components/Work/FreelanceWork.vue'
import PersonalWork from '~/components/Work/PersonalWork.vue'
import Projects from '~/components/Work/Projects.vue'

const { freelanceProjects } = useProjects()

useSeoMeta({
  title: 'Work | Than Phourac - Portfolio',
  ogTitle: 'Work | Than Phourac - Portfolio',
  description:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogDescription:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogImage: 'https://phourac.site/images/banner.png?v=1',
  twitterImage: 'https://phourac.site/images/banner.png?v=1',
  twitterCard: 'summary_large_image'
})

useHead({
  title: 'Work - Rac',
  meta: [
    {
      name: 'description',
      content:
        'Rac is a creative developer showcasing recent projects and unique frontend experiences.'
    },
    {
      name: 'keywords',
      content:
        'creative developer, portfolio, frontend projects, Rac, web development, than phourac, Than Phourac, Phourac, Phourac Than'
    },
    { name: 'author', content: 'Rac' },
    {
      property: 'og:title',
      content: 'Work - Rac | Creative Developer & Designer'
    },
    {
      property: 'og:description',
      content:
        'Explore Rac’s latest frontend development work, creative projects, and how to get in touch.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://phourac.site/' },
    { property: 'og:image', content: 'https://phourac.site/images/banner.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Work - Rac' },
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
