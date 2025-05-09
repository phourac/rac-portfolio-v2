<template>
  <div
    class="h-auto flex flex-col items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt:2 md:container mx-auto px-8 py-8"
  >
    <div class="flex flex-col">
      <div class="flex flex-col">
        <h2
          class="text-[80px] leading-[90px] mb-[40px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          Education & Experience
        </h2>
        <p
          class="pl-[40px] text-[20px] leading-[28px] md:pr-[400px] mb-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          Established history of success in design and development, consistently
          delivering valuable insights and driving significant results.
        </p>
      </div>

      <div class="flex flex-wrap w-full pt-[12px] pl-[40px]">
        <div class="flex-1 flex flex-col items-start text-left">
          <h1 class="font-[700] text-[50px] text-white">2+</h1>
          <p
            class="text-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
          >
            Years Of Experience
          </p>
        </div>
        <div class="flex-1 flex flex-col items-start text-left">
          <h1 class="font-[700] text-[50px] text-white">20+</h1>
          <p
            class="text-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
          >
            Completed Projects
          </p>
        </div>
        <div class="flex-1 flex flex-col items-start text-left">
          <h1 class="font-[700] text-[50px] text-white">10+</h1>
          <p
            class="text-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
          >
            Technologies Used
          </p>
        </div>
        <div class="flex-1 flex flex-col items-start text-left">
          <h1 class="font-[700] text-[50px] text-white">90%+</h1>
          <p
            class="text-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
          >
            Lighthouse Performance Score
          </p>
        </div>
      </div>
    </div>

    <Timeline />
  </div>

  <!-- <Project /> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import ScrollExploreButton from '@/components/Home/ScrollExploreButton.vue'
import Timeline from '@/components/About/Timeline.vue'

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
