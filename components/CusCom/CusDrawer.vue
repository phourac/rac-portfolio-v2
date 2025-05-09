<script setup lang="ts">
const isOpen = defineModel<boolean>()

// Prevent scrolling when drawer is open
watch(isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden' // Prevent body scroll
  } else {
    document.body.style.overflow = '' // Allow body scroll again
  }
})

// Close drawer and update parent state
const closeDrawer = () => {
  isOpen.value = false
}
</script>

<template>
  <transition name="drawer">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 flex w-full items-center justify-center overflow-hidden"
    >
      <!-- Overlay -->
      <div class="fixed inset-0 bg-black/50" @click="closeDrawer"></div>

      <!-- Drawer Content -->
      <div
        class="w-full h-full bg-black overflow-hidden flex items-center justify-center"
      >
        <div class="p-4 text-white text-center overflow-hidden">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.1s ease-in-out;
}

.drawer-enter, .drawer-leave-to /* .drawer-leave-active in <2.1.8 */ {
  /* transform: translateX(-100%); */
}

/* Adding transition delay to the enter transition */
.drawer-enter-to {
  transform: translateX(0);
  transition-delay: 0.3s; /* Add a delay of 0.3 seconds */
}

.drawer-leave {
  /* transform: translateX(100%); */
  transform: translateX(0);
  /* transition-delay: 0.3s; Add a delay of 0.3 seconds */
}
</style>
