<template>
  <div
    class="h-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt-6 md:container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16"
  >
    <div class="flex flex-col w-full">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] sm:text-[64px] text-[48px] leading-tight mb-8 bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent font-bold tracking-tight"
        >
          About me
        </h2>
        <p
          class="text-[18px] sm:text-[20px] leading-relaxed text-gray-300 mb-10 max-w-4xl"
        >
          With over {{ yearsOfExperience }} years of dedicated focus on web development that achieves business goals, I have established myself as a trusted professional in the industry.
        </p>
      </div>

      <!-- Stats Counters Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full pt-4">
        <div class="flex flex-col items-start text-left">
          <h3 class="font-bold text-4xl sm:text-5xl text-white">{{ yearsOfExperience }}+</h3>
          <p class="text-sm sm:text-base text-gray-400 mt-1">
            Years Of Experience
          </p>
        </div>
        <div class="flex flex-col items-start text-left">
          <h3 class="font-bold text-4xl sm:text-5xl text-white">20+</h3>
          <p class="text-sm sm:text-base text-gray-400 mt-1">
            Completed Projects
          </p>
        </div>
        <div class="flex flex-col items-start text-left">
          <h3 class="font-bold text-4xl sm:text-5xl text-white">10+</h3>
          <p class="text-sm sm:text-base text-gray-400 mt-1">
            Technologies Used
          </p>
        </div>
        <div class="flex flex-col items-start text-left">
          <h3 class="font-bold text-4xl sm:text-5xl text-white">90%+</h3>
          <p class="text-sm sm:text-base text-gray-400 mt-1">
            Lighthouse Performance Score
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const startYear = 2023
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => Math.max(1, currentYear - startYear))
</script>
