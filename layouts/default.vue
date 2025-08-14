<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

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

definePageMeta({ layout: 'default' })
</script>

<template>
  <div class="layout-container">
    <Navbar />
    <div class="content-wrapper">
      <main>
        <slot />
      </main>
      <Footer />
      <div class="scroll-spacer" />
    </div>
  </div>
</template>

<style scoped>
.layout-container {
  background: linear-gradient(
    60deg,
    rgba(28, 26, 31, 1) 28%,
    rgba(18, 14, 59) 100%
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
  overflow-y: auto;
}
</style>
