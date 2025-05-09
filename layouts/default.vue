<script setup>
import { onMounted, nextTick, ref, onBeforeUnmount, onUpdated } from 'vue'
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

definePageMeta({
  title: 'Home - Rac',
  meta: [
    {
      name: 'description',
      content: 'Rac portfolio'
    },
    {
      name: 'keywords',
      content:
        'Vue, Nuxt, Locomotive Scroll, GSAP, Smooth Scroll, SEO , Portfolio , Animation , Rac ,Phourac , Than Phourac'
    },
    { property: 'og:title', content: 'Awesome Smooth Scroll Page' },
    {
      property: 'og:description',
      content: 'Experience smooth scrolling with stunning GSAP animations.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://yourdomain.com/smooth-scroll' },
    {
      property: 'og:image',
      content: 'https://yourdomain.com/preview-image.jpg'
    },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Awesome Smooth Scroll Page' },
    {
      name: 'twitter:description',
      content: 'A high-performance Vue component with smooth scrolling.'
    },
    {
      name: 'twitter:image',
      content: 'https://yourdomain.com/preview-image.jpg'
    }
  ]
})
const scrollContainerRef = ref(null)
let locomotiveScroll = null
let resizeObserver = null

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

    document.body.style.height = '100%'
    document.documentElement.style.height = '100%'

    const footer = scrollContainerRef.value.querySelector('footer')
    if (footer) footer.style.marginBottom = '100px'

    // Observe for size changes to keep scroll accurate
    resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateScroll)
    })
    resizeObserver.observe(scrollContainerRef.value)

    // Configure ScrollTrigger
    // ScrollTrigger.scrollerProxy(scrollContainerRef.value, {
    //   scrollTop(value) {
    //     return arguments.length
    //       ? locomotiveScroll.scrollTo(value, 0, 0)
    //       : locomotiveScroll.scroll.instance.scroll.y
    //   },
    //   getBoundingClientRect() {
    //     return {
    //       top: 0,
    //       left: 0,
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     }
    //   },
    //   pinType: scrollContainerRef.value.style.transform ? 'transform' : 'fixed'
    // })

    // locomotiveScroll.on('scroll', ScrollTrigger.update)

    // Animate panels
    // if (process.client) {
    //   const { $gsap } = useNuxtApp()

    //   $gsap.utils.toArray('.panel').forEach((panel) => {
    //     $gsap.to(panel, {
    //       scrollTrigger: {
    //         trigger: panel,
    //         scroller: scrollContainerRef.value,
    //         start: 'top center',
    //         end: 'bottom center',
    //         scrub: 1,
    //         markers: false
    //       },
    //       opacity: 1,
    //       x: 0,
    //       duration: 1.5,
    //       ease: 'power3.out'
    //     })
    //   })
    // }
  } catch (error) {
    console.error('Failed to initialize Locomotive Scroll:', error)
  }
})

onUpdated(() => {
  updateScroll()
})

// onBeforeUnmount(() => {
//   if (locomotiveScroll) {
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     locomotiveScroll.destroy()
//   }
//   if (resizeObserver && scrollContainerRef.value) {
//     resizeObserver.unobserve(scrollContainerRef.value)
//   }
// })
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
