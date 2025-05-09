<template>
  <div class="h-auto cursor-pointer w-[100%] px-4">
    <NuxtImg
      src="/images/work-scribble.svg"
      width="240"
      height="135"
      class="mb-2 ml-4"
      loading="lazy"
    />
    <div class="grid grid-cols-12 gap-4">
      <div
        v-for="(item, i) in recentWorks"
        :key="i"
        :class="i < 2 ? 'col-span-6' : 'col-span-4'"
      >
        <div
          class="w-full h-[400px] overflow-hidden rounded-[10px] p-16 relative group"
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
          @mouseenter="showOverlay(i)"
          @mouseleave="hideOverlay(i)"
        >
          <NuxtImg
            :src="item.img || '/images/default-image.jpg'"
            alt="Project Image"
            class="work-img w-full h-full object-contain transition duration-300"
            loading="lazy"
          />
          <div
            class="overlay absolute inset-0 flex items-end justify-start p-4 pointer-events-none opacity-0 bottom-5 left-5"
            :class="`overlay overlay-${i}`"
          >
            <p class="text-white text-3xl font-semibold">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const showOverlay = (index: number) => {
  const overlay = document.querySelector(
    `.overlay-${index}`
  ) as HTMLElement | null
  const img = document.querySelector(`.img-${index}`) as HTMLElement | null

  if (overlay && img) {
    // Set the initial state of the image blur and overlay immediately
    gsap.set(img, { filter: 'blur(4px)' })
    gsap.set(overlay, { opacity: 1, y: 10, pointerEvents: 'auto' })

    // Start animations for both at the same time
    gsap.to(overlay, {
      y: 0,
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.3,
      ease: 'circ.in'
    })

    gsap.to(img, {
      filter: 'blur(1px)',
      duration: 0.3,
      ease: 'circ.in',
      scale: 1.2 // slightly zoom in
    })
  }
}

const hideOverlay = (index: number) => {
  const overlay = document.querySelector(
    `.overlay-${index}`
  ) as HTMLElement | null
  const img = document.querySelector(`.img-${index}`) as HTMLElement | null

  if (overlay && img) {
    gsap.to(overlay, {
      y: 0,
      opacity: 0,
      ease: 'circ.in',
      pointerEvents: 'none'
    })

    gsap.to(img, {
      filter: 'blur(0px)',
      ease: 'circ.in',
      scale: 1
    })
  }
}

onMounted(() => {
  const overlays = document.querySelectorAll('.overlay')
  overlays.forEach((overlay) => {
    gsap.set(overlay, { y: 0, opacity: 0 })
  })
})
</script>
