import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollPosition() {
  const scrollY = ref(0)

  const updateScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    // Update scrollY when the component mounts
    updateScroll()
    // Ensure the scroll event is bound to the window object
    window.addEventListener('scroll', updateScroll)
  })

  onUnmounted(() => {
    // Clean up the event listener when the component is unmounted
    window.removeEventListener('scroll', updateScroll)
  })

  // Watch the scrollY ref for changes and log it for debugging

  return { scrollY }
}
