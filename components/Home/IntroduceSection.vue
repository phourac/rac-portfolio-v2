<template>
  <section aria-labelledby="intro">
    <div
      class="lg:h-[700px] h-[1100px] flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-1 md:pt-16 pt:2 md:container mx-auto px-4 py-8"
    >
      <!-- Image Section -->
      <div
        class="relative overflow-hidden w-full lg:w-1/2 max-w-[800px] lg:max-w-[450px] min-h-[300px] sm:min-h-[400px] md:min-h-[400px] rounded-3xl"
      >
        <NuxtImg
          src="/images/me.png"
          class="object-cover w-full h-full glitch-image"
          alt="A picture of Phourac, a front-end developer"
          loading="lazy"
        />
        <div class="glitch-overlay"></div>
      </div>

      <!-- Text Section -->
      <div class="flex flex-col gap-4 w-full lg:w-1/2">
        <h1
          id="intro"
          class="text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-primary font-bold"
        >
          Hi, I'm Phourac.
          <span class="text-gray-300">I am a front-end developer</span>
          <span class="text-gray-400">specializing in interfaces</span>
          <span class="text-gray-500">and web applications.</span>
        </h1>

        <p class="text-secondary text-lg w-fit">
          With 2 years of experience, I'm passionate about creating efficient,
          responsive, and user-friendly interfaces.
        </p>

        <div>
          <button class="cv-button">
            Download CV
            <Icon
              :icon="'material-symbols:download-rounded'"
              width="28"
              height="28"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const target = ref<HTMLElement>()
const { y } = useScroll(window)

const { transform } = useElementTransform(target, (initData) => {
  initData.translateX = '0px' // Initial position
})

watch(y, (scrollY) => {
  transform.translateX = `${scrollY * 1.5}px`
})
</script>

<style scoped>
/* Glitch effect on image */
.glitch-image {
  position: relative;
  display: inline-block;
  overflow: hidden;
  z-index: 1;
}

.glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 2;
  pointer-events: none;
}

/* Glitch effect */
@keyframes glitch {
  0% {
    transform: translate(0, 0);
    clip-path: inset(0 0 0 0);
  }
  25% {
    transform: translate(-10px, 0);
    clip-path: inset(10% 0 10% 0);
  }
  50% {
    transform: translate(10px, 0);
    clip-path: inset(0 0 10% 0);
  }
  75% {
    transform: translate(-10px, 0);
    clip-path: inset(10% 0 10% 0);
  }
  100% {
    transform: translate(0, 0);
    clip-path: inset(0 0 0 0);
  }
}

/* Button styles */
.cv-button {
  background-color: #c4f000;
  color: #000;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.cv-button:hover {
  background-color: #000;
  border: 1px solid #c4f000;
  color: #fafafa;
}
</style>
