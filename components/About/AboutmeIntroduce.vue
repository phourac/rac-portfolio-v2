<template>
  <div
    class="h-auto flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16 md:container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16"
  >
    <!-- Image Section -->
    <div
      class="relative overflow-hidden w-full lg:w-1/2 max-w-[500px] rounded-3xl shadow-2xl border border-neutral-800 bg-neutral-950 p-2"
    >
      <NuxtImg
        src="/images/me.jpg"
        class="object-cover w-full h-auto rounded-2xl"
        alt="Than Phourac"
        loading="lazy"
        format="webp"
        quality="80"
      />
    </div>

    <!-- Text Section -->
    <div class="flex flex-col gap-6 w-full lg:w-1/2 text-left">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-white tracking-tight"
      >
        A passionate <span class="text-[#c4f000]">Web Developer</span> who builds modern websites and dynamic web applications.
      </h2>

      <p class="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
        Hi! I'm Phourac. I've always been passionate about technology and dreamed of becoming a developer. While studying computer science, I explored many different technologies and kept building things to learn and grow.
      </p>

      <p class="text-gray-300 text-base md:text-lg leading-relaxed font-normal">
        With over {{ yearsOfExperience }} years of experience, I can effectively use modern technologies like React, Next.js, Vue, and Nuxt. I’m confident in building a wide range of projects using these frameworks.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const startYear = 2023
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => Math.max(1, currentYear - startYear))
</script>
