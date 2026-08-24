<template>
  <NuxtLink
    :to="`/work-experience/${slug}`"
    class="block group"
    @click="scrollToTop"
  >
    <div
      class="w-full h-[380px] md:h-[400px] overflow-hidden rounded-xl relative group transition-all duration-300"
      style="
        background-image: linear-gradient(
          to right top,
          #000000,
          #080808,
          #0e0e0e,
          #141414,
          #181818
        );
      "
    >
      <!-- Image Display -->
      <img
        :src="img || '/images/default-image.jpg'"
        :alt="title || 'Project Image'"
        class="w-full h-full p-6 md:p-8 object-contain transition duration-500 group-hover:scale-105 group-hover:blur-xs"
        loading="lazy"
        @error="onImgError"
      />

      <!-- Clean Minimal Overlay -->
      <div
        class="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span
          v-if="category"
          class="text-xs uppercase tracking-wider text-neutral-400 font-mono mb-1"
        >
          {{ category }}
        </span>
        <p class="text-white text-2xl lg:text-3xl font-semibold leading-snug">
          {{ title }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  index: number
  slug: string
  category?: string
}>()

const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const onImgError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/images/default-image.jpg'
  }
}
</script>
