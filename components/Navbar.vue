<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollPosition } from '@/composables/useScrollPosition'
import Hamburger from '@/components/Hamburger.vue'
const isMobileMenuOpen = ref(false)
const isHover = ref(-1)
const { scrollY } = useScrollPosition()

watchEffect(() => {
  console.log('scrollY:', scrollY.value)
})
const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

const hoverMenu = (index: number) => {
  isHover.value = index
}

// Disable body scroll when the modal is open
onMounted(() => {
  watchEffect(() => {
    if (isMobileMenuOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  })
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    :class="[
      scrollY > 20 ? 'bg-black py-2' : 'bg-transparent py-4 ',
      'sticky flex justify-between items-center md:px-28 px-8 top-0 z-10 overflow-auto transition-bg'
    ]"
  >
    <NuxtImg
      v-motion
      :initial="{ opacity: 0, x: -50 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }"
      src="/images/white_logo.png"
      sizes="64"
    />

    <nav class="relative">
      <ul class="hidden md:flex gap-8">
        <li
          v-for="(item, index) in navigation"
          :key="index"
          v-motion
          :initial="{
            opacity: 0,
            y: -20
          }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 600 + index * 100 }
          }"
          class="cursor-pointer"
          @mouseenter="hoverMenu(index)"
          @mouseleave="isHover = -1"
        >
          <NuxtLink :to="item.link">
            <p
              v-motion
              :initial="{
                // opacity: 1,
                color: '#FAFAFA'
              }"
              :hovered="{
                color: '#FAFA'
                // scale: 1.1,
                // transition: {
                //   type: 'spring',
                //   stiffness: 500,
                //   damping: 15
                // }
              }"
              class="nav-item text-[#FAFAFA]"
            >
              {{ item.value }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <nav class="flex flex-row items-center gap-8">
      <div class="md:flex flex-row items-center gap-8 hidden">
        <Icon
          v-for="(icon, index) in [
            'formkit:facebook',
            'formkit:github',
            'formkit:linkedin'
          ]"
          :key="icon"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: { delay: 800 + index * 100 }
          }"
          :hover="{
            scale: 1.2,
            transition: { type: 'spring', stiffness: 500 }
          }"
          :icon="icon"
          height="28"
          width="28"
        />
      </div>
      <Hamburger />
    </nav>
  </div>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.transition-bg {
  transition:
    background-color 0.3s ease-in-out,
    padding-block 0.3s ease-in-out;
}
</style>
