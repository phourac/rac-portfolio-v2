<template>
  <div
    class="h-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt:2 md:container mx-auto px-8 py-8"
  >
    <div class="flex flex-col">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] text-[54px] leading-[90px] mb-[40px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          Company Projects
        </h2>
        <p
          class="pl-[40px] text-[20px] leading-[28px] md:pr-[400px] mb-[16px] bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent"
        >
          These company projects showcase my expertise in delivering tailored
          solutions that solve real business challenges. I specialize in
          designing and developing scalable, innovative, and user-friendly
          applications that help companies achieve their goals using the latest
          web technologies.
        </p>
      </div>
    </div>
  </div>

  <!-- <Project /> -->
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import ScrollExploreButton from '@/components/Home/ScrollExploreButton.vue'

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
</style>
