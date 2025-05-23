<script setup>
import { onMounted, nextTick, ref, onUpdated } from 'vue'

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

useSeoMeta({
  title: 'Than Phourac - Portfolio',
  ogTitle: 'Than Phourac - Portfolio',
  description:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogDescription:
    'Rac is a creative developer showcasing recent projects and unique frontend experiences.',
  ogImage: 'https://phourac.site/images/banner.png?v=1',
  twitterImage: 'https://phourac.site/images/banner.png?v=1',
  twitterCard: 'summary_large_image'
})

definePageMeta({ layout: 'default' })
const scrollContainerRef = ref(null)
let locomotiveScroll = null
let resizeObserver = null
const scrollY = ref(0) // 👈 Create ref to store scroll.y

// watchEffect(() => {
//   console.log('scrollYDefal', scrollY.value)
// })

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const updateScroll = async () => {
  if (locomotiveScroll) {
    await nextTick()
    locomotiveScroll.update()
  }
}

onMounted(async () => {
  await nextTick()
  try {
    const { default: LocomotiveScroll } = await import('locomotive-scroll')

    if (!scrollContainerRef.value) return

    locomotiveScroll = new LocomotiveScroll({
      el: scrollContainerRef.value,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      lerp: 0.05,
      getDirection: true,
      getSpeed: true,
      scrollFromAnywhere: true,
      offset: ['0', '10%']
    })
    locomotiveScroll.on('scroll', (args) => {
      scrollY.value = args.scroll.y // 👈 Store scrollY value
    })
    document.body.style.height = '100%'
    document.documentElement.style.height = '100%'

    const footer = scrollContainerRef.value.querySelector('footer')
    if (footer) footer.style.marginBottom = '100px'

    // Observe for size changes to keep scroll accurate
    resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateScroll)
    })
    resizeObserver.observe(scrollContainerRef.value)
  } catch (error) {
    console.error('Failed to initialize Locomotive Scroll:', error)
  }
})

onUpdated(() => {
  updateScroll()
})
</script>

<template>
  <div
    style="
      background: linear-gradient(
        60deg,
        rgba(28, 26, 31, 1) 28%,
        rgba(18, 14, 59) 100%
      );
      height: 100%;
      overflow: hidden;
    "
  >
    <Navbar />
    <div
      id="smooth-content"
      ref="scrollContainerRef"
      class="smooth-scroll"
      data-scroll-container
    >
      <main>
        <slot />
      </main>
      <Footer />
      <div class="scroll-spacer" />
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

.smooth-scroll {
  position: relative;
  min-height: 100vh;
  width: 100%;
  will-change: transform;
}

.scroll-spacer {
  height: 100px;
  width: 100%;
}

/* Panel animation styles */
.panel {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  opacity: 0;
  transform: translateX(-100px);
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
