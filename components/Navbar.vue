<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Icon } from '@iconify/vue'
import { useScrollPosition } from '@/composables/useScrollPosition'
import Hamburger from '@/components/Hamburger.vue'
import CusDrawer from '@/components/CusCom/CusDrawer.vue'
import { useRoute } from 'vue-router'

const isMobileMenuOpen = ref(false)
const isHover = ref(-1)
const hoverIcon = ref(-1)
const isDrawerOpen = ref(false)
const { scrollY } = useScrollPosition()
const isScrolled = ref(false)
const route = useRoute()

const hoverMenu = (index: number) => {
  isHover.value = index
}

const hoverIconFun = (index: number) => {
  hoverIcon.value = index
}

const handleLClickLink = () => {
  isDrawerOpen.value = false
}

watch(scrollY, (newValue) => {
  isScrolled.value = newValue > 20
})

onMounted(() => {
  isScrolled.value = window.scrollY > 20

  watch(isMobileMenuOpen, (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  })
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})

const navigation = [
  { link: '/', value: 'Home' },
  { link: '/about-me', value: 'About' },
  { link: '/work-experience', value: 'Works' },
  { link: '/contact', value: 'Contact' }
]

const socialIcons = [
  {
    icon: 'formkit:facebook',
    link: 'https://www.facebook.com/than.phourac/'
  },
  {
    icon: 'formkit:github',
    link: 'https://github.com/phourac'
  },
  {
    icon: 'formkit:linkedin',
    link: 'https://www.linkedin.com/in/than-phourac-822370267/'
  },
  {
    icon: 'ic:baseline-telegram',
    link: 'https://t.me/phourac'
  }
]
</script>

<template>
  <CusDrawer v-model="isDrawerOpen">
    <div
      v-for="(item, index) in navigation"
      :key="index"
      v-motion
      :initial="{ opacity: 0, y: -20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 600 + index * 100 } }"
      class="cursor-pointer flex flex-col gap-4 py-2"
      @mouseenter="hoverMenu(index)"
      @mouseleave="isHover = -1"
    >
      <NuxtLink
        :to="item.link"
        @click="handleLClickLink"
        :aria-label="`Navigate to ${item.value} page`"
      >
        <span
          v-motion
          :initial="{ color: '#FAFAFA' }"
          :hovered="{ color: '#c4f000' }"
          class="nav-item text-[#FAFAFA] text-2xl"
        >
          {{ item.value }}
        </span>
      </NuxtLink>
    </div>

    <div class="flex flex-row items-center gap-6 pt-10">
      <NuxtLink
        v-for="(icon, index) in socialIcons"
        :key="icon.icon"
        :to="icon.link"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer"
        :aria-label="`Link to ${icon.icon}`"
      >
        <Icon
          :icon="icon.icon"
          width="28"
          height="28"
          role="img"
          :aria-label="`Link to ${icon.icon}`"
          :class="index === hoverIcon ? 'text-[#c4f000]' : ''"
          @mouseenter="hoverIconFun(index)"
          @mouseleave="hoverIcon = -1"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: { delay: 1000 + index * 100 }
          }"
        />
      </NuxtLink>
    </div>
  </CusDrawer>

  <div
    :class="[
      isScrolled ? 'bg-black py-2' : 'bg-transparent py-4',
      'sticky top-0 z-50 transition-bg w-full'
    ]"
  >
    <div class="md:container px-4 mx-auto flex justify-between items-center">
      <NuxtLink to="/" :aria-label="'Go to Home Page'">
        <NuxtImg
          src="/images/white_logo.png"
          width="64"
          height="64"
          loading="lazy"
          alt="Logo"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 400 } }"
        />
      </NuxtLink>

      <nav class="relative">
        <ul class="hidden md:flex gap-8">
          <li
            v-for="(item, index) in navigation"
            :key="index"
            class="cursor-pointer"
            @mouseenter="hoverMenu(index)"
            @mouseleave="isHover = -1"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { delay: 600 + index * 100 }
            }"
          >
            <NuxtLink
              :to="item.link"
              :aria-label="`Navigate to ${item.value} page`"
            >
              <span
                class="nav-item transition-colors duration-300 hover:text-[#c4f000]"
                :class="{
                  'text-[#c4f000]': route.path === item.link,
                  'text-[#FAFAFA]': route.path !== item.link
                }"
                v-motion
                :initial="{ opacity: 0, y: -20 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 600 + index * 100 }
                }"
              >
                {{ item.value }}
              </span>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="flex flex-row items-center gap-8">
        <div class="hidden md:flex gap-6">
          <NuxtLink
            v-for="(icon, index) in socialIcons"
            :key="icon.icon"
            :to="icon.link"
            target="_blank"
            rel="noopener noreferrer"
            class="cursor-pointer"
            :aria-label="`Link to ${icon.icon}`"
          >
            <Icon
              :icon="icon.icon"
              width="24"
              height="24"
              role="img"
              :aria-label="`Link to ${icon.icon}`"
              :class="index === hoverIcon ? 'text-[#c4f000]' : ''"
              @mouseenter="hoverIconFun(index)"
              @mouseleave="hoverIcon = -1"
              v-motion
              :initial="{ opacity: 0, y: -20 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { delay: 600 + index * 100 }
              }"
            />
          </NuxtLink>
        </div>
        <Hamburger v-model="isDrawerOpen" />
      </nav>
    </div>
  </div>
</template>

<style scoped>
.transition-bg {
  transition:
    background-color 0.3s ease-in-out,
    padding-block 0.3s ease-in-out;
}
</style>
