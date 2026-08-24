<template>
  <div
    class="h-auto flex flex-col items-start gap-10 lg:gap-16 md:pt-16 pt-6 md:container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16"
  >
    <div class="flex flex-col w-full">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] sm:text-[64px] text-[48px] leading-tight mb-8 bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent font-bold tracking-tight"
        >
          Education & Experience
        </h2>
        <p
          class="text-[18px] sm:text-[20px] leading-relaxed text-gray-300 mb-10 max-w-4xl"
        >
          Established history of success in web design and front-end engineering, consistently delivering high-performance applications and intuitive user interfaces.
        </p>
      </div>

      <!-- Timeline Component -->
      <div class="w-full">
        <Timeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Timeline from '~/components/About/Timeline.vue'
</script>
