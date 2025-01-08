<script setup lang="ts">
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
}

// Disable body scroll when the modal is open
onMounted(() => {
  watchEffect(() => {
    if (isMobileMenuOpen.value) {
      // Disable scrolling by adding a style directly to the body
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling when the modal is closed
      document.body.style.overflow = ''
    }
  })
})

// Clean up overflow style on component unmount
onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    class="bg-paper flex justify-between items-center px-16 py-4 sticky top-0 z-10 overflow-auto"
  >
    <NuxtImg src="/images/logo.png" sizes="50" />

    <nav class="relative">
      <!-- Mobile Toggle Button -->
      <button
        @click="toggleMenu"
        class="md:hidden p-2 text-black focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <!-- Full-Screen Mobile Menu Dialog with Transition -->
      <transition name="modal-fade">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-20"
          @click="closeMenu"
        >
          <div
            class="bg-white p-6 rounded-none w-full h-full flex flex-col justify-center items-center text-center"
            @click.stop
          >
            <h3 class="text-2xl font-semibold mb-6">Mobile Menu</h3>
            <ul class="space-y-6">
              <li
                v-for="(item, index) in navigation"
                :key="index"
                class="cursor-pointer"
                @click="closeMenu"
              >
                <NuxtLink :to="item.link">
                  <p class="text-black">{{ item.value }}</p>
                </NuxtLink>
              </li>
            </ul>
            <button
              class="mt-6 p-2 bg-red-500 text-white rounded-md"
              @click="closeMenu"
            >
              Close
            </button>
          </div>
        </div>
      </transition>

      <!-- Desktop Navigation Links -->
      <ul class="hidden md:flex gap-8">
        <li
          v-for="(item, index) in navigation"
          :key="index"
          class="cursor-pointer"
        >
          <NuxtLink :to="item.link">
            <p class="text-black relative">{{ item.value }}</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
p {
  position: relative;
}

p::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease;
}

p:hover::after {
  width: 100%;
}

/* Modal Fade Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
