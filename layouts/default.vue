<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Navbar from '@/components/Navbar.vue'

// Register the ScrollToPlugin with GSAP
gsap.registerPlugin(ScrollToPlugin)

onMounted(() => {
  // Apply smooth scrolling to the body element
  gsap.from('#box1', {
    y: 100,
    opacity: 0,
    delay: 1
  })
})

onMounted(() => {
  gsap.to('.panel', {
    scrollTrigger: {
      trigger: '.panel',
      start: 'top center', // Start when the top of the panel hits the center of the viewport
      end: 'bottom center', // End when the bottom of the panel hits the center of the viewport
      scrub: 1, // Smooth scrubbing effect (1 = 1 second delay)
      markers: false // Enable for debugging
    },
    opacity: 1,
    x: 0,
    duration: 1.5, // Animation duration for smoother transition
    ease: 'power3.out' // Smooth easing for a natural motion
  })
})
</script>

<template>
  <div
    style="
      background: rgb(28, 26, 31);
      background: linear-gradient(
        108deg,
        rgba(28, 26, 31, 1) 28%,
        rgba(15, 7, 92, 1) 100%
      );
    "
  >
    <Navbar />
    <div class="h-[100%] lg:px-28 px-8 py-8">
      <slot />
    </div>
    <div
      id="box1"
      style="width: 10; height: 800; background-color: aqua; display: flex"
    >
      <h1>hey</h1>
    </div>
  </div>
  <!-- <div>
    <section class="panel panel--red">Section 1</section>
    <section class="panel panel--blue">Section 2</section>
    <section class="panel panel--green">Section 3</section>
  </div> -->
</template>

<style scoped>
/* Optional: Add custom styling for smooth scroll */
html {
  scroll-behavior: smooth;
}

.panel {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  opacity: 0; /* Start with zero opacity */
  transform: translateX(-100px); /* Start off-screen */
  transition: all 0.3s ease-in-out;
}

.panel--red {
  background-color: red;
}

.panel--blue {
  background-color: blue;
}

.panel--green {
  background-color: green;
}
</style>
