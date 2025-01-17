import { ref, onMounted, onUnmounted, watchEffect } from 'vue'

export function useScrollPosition() {
  const scrollY = ref(0)

  const updateScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    updateScroll()
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScroll)
  })

  watchEffect(() => {
    console.log('Updated scrollY:', scrollY.value)
  })

  return { scrollY }
}
