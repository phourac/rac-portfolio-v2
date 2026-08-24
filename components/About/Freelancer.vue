<template>
  <div
    class="h-auto flex flex-col items-start gap-10 lg:gap-16 md:pt-16 pt-6 md:container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16"
  >
    <div class="flex flex-col w-full">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] sm:text-[64px] text-[48px] leading-tight mb-8 bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent font-bold tracking-tight"
        >
          Freelancer & Services
        </h2>
        <p
          class="text-[18px] sm:text-[20px] leading-relaxed text-gray-300 mb-10 max-w-4xl"
        >
          I specialize in building modern, responsive, and high-performance websites using Vue, Nuxt, React, and Next.js. From bespoke business portals to complex web apps, I deliver clean code and pixel-perfect design.
        </p>
      </div>

      <!-- Services Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div
          v-for="(item, i) in refServices"
          :key="i"
          class="flex flex-col items-start text-left gap-4 bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl group"
        >
          <span class="p-3 rounded-xl bg-neutral-950 text-[#c4f000] border border-neutral-800 group-hover:scale-110 transition-transform duration-300">
            <Icon :icon="item.icon" width="36" height="36" />
          </span>
          <h3 class="text-xl font-bold text-white tracking-tight">
            {{ item.title }}
          </h3>
          <p class="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const services = [
  {
    icon: 'fluent:window-dev-edit-20-regular',
    title: 'Frontend Development',
    description:
      'Building modern, high-quality web interfaces using Vue, Nuxt, React, and Next.js — optimized for performance, responsiveness, and seamless UX.'
  },
  {
    icon: 'tabler:chart-infographic',
    title: 'Scalable Solutions',
    description:
      'Designing and engineering scalable frontend architectures that adapt to business growth, handling complex data workflows and user interactions.'
  },
  {
    icon: 'solar:wallet-linear',
    title: 'Custom Web Projects',
    description:
      'Delivering professional, tailored digital products for startups, businesses, and personal brands with clean code and high standards.'
  }
]

const refServices = ref(services)
</script>
