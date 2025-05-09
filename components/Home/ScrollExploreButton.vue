<template>
  <button
    @click="handleScroll"
    class="relative w-40 h-40 group text-white"
    aria-label="Scroll to explore"
  >
    <!-- Rotating text container -->
    <div class="absolute inset-0 animate-spin-slow text-white">
      <svg class="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <path
            id="textPath"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
        </defs>
        <text class="text-white text-[7px] uppercase tracking-[0.3em]">
          <textPath
            href="#textPath"
            startOffset="0"
            class="text-white"
            fill="white"
          >
            * Scroll to Explore * Scroll to Explore
          </textPath>
        </text>
      </svg>
    </div>
    <div
      class="absolute inset-0 flex flex-col items-center justify-center space-y-[-8px] group-hover:translate-y-1 transition-transform duration-300"
    >
      <Icon
        icon="radix-icons:double-arrow-down"
        class="text-info-text h-[40px] w-[40px]"
      />
    </div>
    <div
      class="absolute inset-0 rounded-full transition-transform duration-300 group-hover:scale-105 group-active:scale-95"
    ></div>
  </button>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'

const handleScroll = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  })
}
</script>
