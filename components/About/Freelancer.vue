<template>
  <div
    class="h-auto flex flex-col items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt:2 md:container mx-auto px-8 py-8"
  >
    <div class="flex flex-col">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] text-[54px] leading-[90px] mb-[40px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          Freelancer & Services
        </h2>
        <p
          class="pl-[40px] text-[20px] leading-[28px] md:pr-[400px] mb-[40px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          I specialize in building modern, responsive, and high-performance
          websites using the latest frontend technologies like Vue, Nuxt, React,
          and Next.js. Whether you're looking for a sleek business website, a
          dynamic dashboard, or a custom web app, I deliver pixel-perfect
          interfaces with great attention to user experience and performance.
          Let’s bring your ideas to life with clean code and beautiful design.
        </p>
      </div>

      <div class="flex md:flex-row flex-col gap-4 w-full">
        <div
          v-for="(item, i) in refServices"
          :key="i"
          class="flex flex-col gap-4 bg-black rounded-[22px] py-[40px] px-[20px] flex-1"
        >
          <span class="text-paper">
            <Icon :icon="item.icon" width="50" height="50" />
          </span>
          <h1 class="text-[22px] text-gray-300 font-semibold">
            {{ item.title }}
          </h1>
          <p class="text-[16px] text-gray-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'

const services = [
  {
    icon: 'fluent:window-dev-edit-20-regular',
    title: 'Frontend Development',
    description:
      'I build modern, high-quality web interfaces using Vue, Nuxt, React, and Next.js — optimized for performance, responsiveness, and great UX.'
  },
  {
    icon: 'tabler:chart-infographic',
    title: 'Scalable Solutions',
    description:
      'Whether it’s a landing page or a full web app, I design and build scalable solutions that grow with your business and needs.'
  },
  {
    icon: 'solar:wallet-linear',
    title: 'Budget-Friendly Projects',
    description:
      'Get professional results without breaking the bank — I offer flexible pricing for startups, small businesses, and personal projects.'
  }
]

const refServices = ref(services)
</script>
