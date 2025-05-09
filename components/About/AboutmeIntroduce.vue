<template>
  <div
    class="h-[700px] flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 md:pt-16 pt-2 md:container mx-auto px-4 py-8"
  >
    <!-- Image Section with Glitch Effect -->
    <div
      class="relative overflow-hidden max-w-[800px] lg:max-w-[450px] w-full h-auto rounded-3xl"
    >
      <NuxtImg
        src="/images/me.png"
        class="object-cover w-full h-auto"
        alt="Banner"
      />
    </div>

    <!-- Text Section -->
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h1
        class="text-[32px] md:text-[32px] lg:text-[40px] leading-tight text-primary font-bold"
      >
        <span class="block">
          A passionate <span class="text-paper">Web Developer</span>
        </span>
        <span class="block">who builds modern websites</span>
        <span class="block">and dynamic web applications.</span>
      </h1>

      <p class="text-secondary text-[16px] w-fit mx-auto lg:mx-0">
        Hi! I'm Phourac, I’ve always been passionate about technology and
        dreamed of becoming a developer. While studying, I explored many
        different technologies and kept building things to learn and grow.
      </p>
      <p class="text-secondary text-[16px] w-fit mx-auto lg:mx-0">
        With over 2 years of experience, I can effectively use modern
        technologies like React, Next.js, Vue, and Nuxt. I’m confident in
        building a wide range of projects using these frameworks.
      </p>
    </div>
  </div>

  <!-- <Project /> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import ScrollExploreButton from '@/components/Home/ScrollExploreButton.vue'

const target = ref<HTMLElement>()
const { y } = useScroll(window)

const { transform } = useElementTransform(target, (initData) => {
  initData.translateX = '0px' // Initial position
})

watch(y, (scrollY) => {
  transform.translateX = `${scrollY * 1.5}px`
})
</script>
