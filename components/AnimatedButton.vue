<template>
  <!-- Nuxt internal link -->
  <NuxtLink v-if="to" :to="to">
    <button ref="button" :class="buttonClasses">
      <slot>{{ label }}</slot>
      <Icon v-if="icon" :icon="icon" class="w-5 h-5" />
    </button>
  </NuxtLink>

  <!-- External link -->
  <a v-else-if="href" :href="href" target="_blank" rel="noopener noreferrer">
    <button ref="button" :class="buttonClasses">
      <slot>{{ label }}</slot>
      <Icon v-if="icon" :icon="icon" class="w-5 h-5" />
    </button>
  </a>

  <!-- Normal button -->
  <button v-else ref="button" :class="buttonClasses">
    <slot>{{ label }}</slot>
    <Icon v-if="icon" :icon="icon" class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { Icon } from '@iconify/vue'
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    label?: string
    icon?: string
    to?: string // Nuxt internal
    href?: string // external
    bgColor?: string
    textColor?: string
    hoverTextColor?: string
  }>(),
  {
    bgColor: 'bg-black',
    textColor: 'text-gray-400',
    hoverTextColor: '#ffffff'
  }
)

const button = ref<HTMLButtonElement | null>(null)

const buttonClasses = computed(() => [
  'rounded-full py-4 px-8 text-base flex items-center gap-2 shadow-md transition-all',
  props.bgColor,
  props.textColor
])

const onEnter = () => {
  if (button.value) {
    gsap.to(button.value, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out',
      color: props.hoverTextColor
    })
  }
}

const onLeave = () => {
  if (button.value) {
    gsap.to(button.value, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
      color: '' // Let Tailwind apply original class again
    })
  }
}

onMounted(() => {
  button.value?.addEventListener('mouseenter', onEnter)
  button.value?.addEventListener('mouseleave', onLeave)
})

onBeforeUnmount(() => {
  button.value?.removeEventListener('mouseenter', onEnter)
  button.value?.removeEventListener('mouseleave', onLeave)
})
</script>
