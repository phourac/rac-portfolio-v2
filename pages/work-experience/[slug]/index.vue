<template>
  <WorkDetails />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import WorkDetails from '~/components/Work/WorkDetails.vue'

const route = useRoute()
const slug = (route.params.slug as string) || ''
const { getProjectBySlug } = useProjects()

const project = computed(() => getProjectBySlug(slug))
const projectTitle = computed(() => project.value?.name || project.value?.title || slug)

const seoTitle = computed(() => `${projectTitle.value} | Than Phourac - Portfolio`)
const seoDescription = computed(() => {
  if (!project.value?.desc) return `Explore Rac’s work on ${projectTitle.value}, showcasing frontend development and creative projects.`
  const text = Array.isArray(project.value.desc) ? project.value.desc.join(' ') : project.value.desc
  return text.replace(/<[^>]*>?/gm, '').substring(0, 160)
})
const seoUrl = computed(() => `https://phourac.site/work-experience/${slug}`)
const seoImage = computed(() => project.value?.img || 'https://phourac.site/images/banner.png')

useSeoMeta({
  title: seoTitle.value,
  ogTitle: seoTitle.value,
  description: seoDescription.value,
  ogDescription: seoDescription.value,
  ogImage: seoImage.value,
  twitterImage: seoImage.value,
  twitterCard: 'summary_large_image'
})

useHead({
  title: seoTitle.value,
  meta: [
    { name: 'description', content: seoDescription.value },
    { name: 'keywords', content: `${projectTitle.value}, creative developer, portfolio, frontend projects, Rac, web development, than phourac` },
    { name: 'author', content: 'Rac' },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: seoUrl.value },
    { property: 'og:image', content: seoImage.value },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle.value },
    { name: 'twitter:description', content: seoDescription.value },
    { name: 'twitter:image', content: seoImage.value }
  ],
  link: [{ rel: 'canonical', href: seoUrl.value }]
})
</script>
