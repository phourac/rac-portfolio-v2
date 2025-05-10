<template>
  <section class="md:container mx-auto px-4 py-8">
    <div
      class="w-full mx-auto px-10 py-12 border border-black/5 rounded-2xl bg-paper flex flex-col items-center shadow-inner"
    >
      <h2
        class="text-[40px] md:text-[60px] leading-tight mb-5 font-normal text-black text-center"
      >
        Are You Ready to kickstart your project?
      </h2>
      <p class="text-lg md:text-xl leading-7 text-black text-center max-w-2xl">
        Reach out and let's make it happen ✨. I'm also available for full-time
        or part-time opportunities to push the boundaries of design and deliver
        exceptional work.
      </p>
      <div class="mt-8">
        <NuxtLink to="/contact">
          <button
            ref="ctaButton"
            class="bg-black text-gray-400 rounded-full py-4 px-8 text-base flex items-center gap-2 shadow-md transition-all"
          >
            Let's Talk
            <Icon icon="material-symbols:download" class="w-5 h-5" />
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { Icon } from '@iconify/vue'

const ctaButton = ref<HTMLButtonElement | null>(null)

const onEnter = () => {
  if (ctaButton.value) {
    gsap.to(ctaButton.value, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      color: '#ffffff'
    })
  }
}

const onLeave = () => {
  if (ctaButton.value) {
    gsap.to(ctaButton.value, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      color: '#9ca3af' // Tailwind's text-gray-400
    })
  }
}

onMounted(() => {
  ctaButton.value?.addEventListener('mouseenter', onEnter)
  ctaButton.value?.addEventListener('mouseleave', onLeave)
})

onBeforeUnmount(() => {
  ctaButton.value?.removeEventListener('mouseenter', onEnter)
  ctaButton.value?.removeEventListener('mouseleave', onLeave)
})
</script>
