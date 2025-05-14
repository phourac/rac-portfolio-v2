<template>
  <div
    class="w-full h-[400px] overflow-hidden rounded-[10px] p-16 relative group"
    :style="bgGradient"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
  >
    <NuxtImg
      :src="img || '/images/default-image.jpg'"
      alt="Project Image"
      :class="`work-img w-full h-full object-contain transition duration-300 ${imgClass}`"
      loading="lazy"
    />

    <div
      :class="`overlay absolute inset-0 flex items-end justify-start p-4 pointer-events-none opacity-0 ${overlayClass}`"
    >
      <p class="text-white text-3xl font-semibold">{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  img: string
  title: string
  index: number
}>()

const overlayClass = `overlay-${props.index}`
const imgClass = `img-${props.index}`
const bgGradient =
  'background-image: linear-gradient(to right top, #000000, #080808, #0e0e0e, #141414, #181818);'

const showOverlay = () => {
  const overlay = document.querySelector(
    `.${overlayClass}`
  ) as HTMLElement | null
  const img = document.querySelector(`.${imgClass}`) as HTMLElement | null

  if (overlay && img) {
    gsap.set(img, { filter: 'blur(4px)' })
    gsap.set(overlay, { opacity: 1, y: 10, pointerEvents: 'auto' })

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
      ease: 'circ.in'
    })
  }
}

const hideOverlay = () => {
  const overlay = document.querySelector(
    `.${overlayClass}`
  ) as HTMLElement | null
  const img = document.querySelector(`.${imgClass}`) as HTMLElement | null

  if (overlay && img) {
    gsap.to(overlay, {
      y: 0,
      opacity: 0,
      ease: 'circ.in',
      pointerEvents: 'none'
    })

    gsap.to(img, {
      filter: 'blur(0px)',
      ease: 'circ.in'
    })
  }
}

onMounted(() => {
  const overlay = document.querySelector(`.${overlayClass}`)
  if (overlay) {
    gsap.set(overlay, { y: 0, opacity: 0 })
  }
})
</script>
