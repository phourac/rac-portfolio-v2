<template>
  <div
    class="min-h-screen flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt:2"
  >
    <!-- Image Section with Glitch Effect -->
    <div
      class="relative overflow-hidden max-w-[800px] lg:max-w-[450px] w-full h-auto rounded-3xl"
    >
      <NuxtImg
        src="/images/me.png"
        class="object-cover w-full h-auto glitch-image"
        alt="Banner"
      />
      <div class="glitch-overlay"></div>
    </div>

    <!-- Text Section -->
    <div class="flex flex-col gap-4">
      <h1
        class="text-[32px] md:text-[48px] lg:text-[56px] leading-tight text-primary font-bold"
      >
        <span>Hi, I'm Phourac.</span> <br />
        <span class="text-gray-300">I am a front-end developer </span><br />
        <span class="text-gray-400">specializing in interfaces</span> <br />
        <span class="text-gray-500">and web applications.</span>
      </h1>

      <p class="text-secondary text-lg w-fit">
        With 2 years of experience, I'm passionate about creating efficient,
        responsive, and user-friendly interfaces.
      </p>

      <div>
        <button
          v-motion
          :initial="{
            backgroundColor: '#c4f000',
            color: '#000000'
          }"
          :hovered="{
            backgroundColor: '#000000',
            border: '1px solid #c4f000',
            color: '#FAFAFA'
          }"
          class="rounded-3xl px-8 py-3 inline-flex items-center gap-2 transition-all duration-300 font-semibold"
        >
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

  <Project />
</template>

<script setup lang="ts">
import Project from '@/components/Home/Project.vue'
import { Icon } from '@iconify/vue'
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

/* The glitch effect animation */
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

/* Adding noise and flicker to the glitch effect */
.glitch-overlay:before,
.glitch-overlay:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://img.freepik.com/free-vector/glitch-background_1217-1312.jpg')
    repeat;
  pointer-events: none;
  opacity: 0.1;
  z-index: 3;
  animation: noise 0.2s infinite linear;
}

.glitch-overlay:after {
  animation-delay: 0.1s;
}

/* Smooth flicker effect */
@keyframes noise {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(3px, 3px);
  }
  50% {
    transform: translate(-3px, -3px);
  }
  75% {
    transform: translate(3px, 3px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
