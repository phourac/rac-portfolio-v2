<template>
  <div
    class="h-auto flex flex-col items-start gap-10 lg:gap-16 md:pt-16 pt-6 md:container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-16"
  >
    <!-- Header -->
    <div class="flex flex-col w-full">
      <div class="flex flex-col">
        <h2
          class="md:text-[80px] sm:text-[64px] text-[48px] leading-tight mb-8 bg-[linear-gradient(#fff,_#696969)] bg-clip-text text-transparent font-bold tracking-tight"
        >
          Skills & Technologies
        </h2>
        <p
          class="text-[18px] sm:text-[20px] leading-relaxed text-gray-300 mb-10 max-w-4xl"
        >
          Over {{ yearsOfExperience }}+ years of hands-on experience building
          modern, high-performance web applications using industry-standard
          tools, frameworks, and front-end architecture.
        </p>
      </div>
    </div>

    <!-- Categorized Skill Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
      <div
        v-for="(category, idx) in skillCategories"
        :key="idx"
        class="flex flex-col items-start text-left gap-5 bg-neutral-900/40 hover:bg-neutral-900/80 border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-8 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl group"
      >
        <!-- Category Title & Icon -->
        <div class="flex items-center gap-3">
          <span
            class="p-2.5 rounded-xl bg-neutral-950 text-[#c4f000] border border-neutral-800 group-hover:scale-110 transition-transform duration-300"
          >
            <Icon :icon="category.categoryIcon" width="24" height="24" />
          </span>
          <h3 class="text-xl font-bold text-white tracking-tight">
            {{ category.title }}
          </h3>
        </div>

        <!-- Tech List -->
        <div class="flex flex-wrap gap-2.5 w-full pt-2">
          <div
            v-for="tech in category.skills"
            :key="tech.name"
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 text-neutral-300 text-xs font-mono transition-colors"
          >
            <Icon
              :icon="tech.icon"
              width="16"
              height="16"
              class="flex-shrink-0"
            />
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const startYear = 2023
const currentYear = new Date().getFullYear()
const yearsOfExperience = computed(() => Math.max(1, currentYear - startYear))

const skillCategories = [
  {
    title: 'Frontend',
    categoryIcon: 'fluent:code-20-regular',
    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Firebase', icon: 'logos:firebase' },
      { name: 'WebSocket Integration', icon: 'tabler:plug-connected' }
    ]
  },
  {
    title: 'Styling & UI',
    categoryIcon: 'solar:palette-linear',
    skills: [
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Material UI', icon: 'logos:material-ui' },
      { name: 'Shadcn UI', icon: 'simple-icons:shadcnui' },
      { name: 'GSAP', icon: 'logos:greensock-icon' },
      { name: 'Framer Motion', icon: 'devicon:motion' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' }
    ]
  },
  {
    title: 'Backend & Database',
    categoryIcon: 'fluent:server-20-regular',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Hono', icon: 'simple-icons:hono' },
      { name: 'Express', icon: 'skill-icons:expressjs-light' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'Mongoose', icon: 'devicon:mongoose' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'Drizzle ORM', icon: 'simple-icons:drizzle' },
      { name: 'REST APIs', icon: 'dashicons:rest-api' }
    ]
  },
  {
    title: 'Web Performance & SEO',
    categoryIcon: 'fluent:search-20-regular',
    skills: [
      { name: 'SEO', icon: 'mdi:search-web' },
      { name: 'Lighthouse', icon: 'logos:lighthouse' },
      { name: 'Web Performance', icon: 'fluent-mdl2:speed-high' }
    ]
  },
  {
    title: 'Deployment & Cloud',
    categoryIcon: 'fluent:cloud-20-regular',
    skills: [
      { name: 'Vercel', icon: 'logos:vercel-icon' },
      { name: 'Netlify', icon: 'logos:netlify-icon' },
      { name: 'Render', icon: 'logos:render-icon' },
      { name: 'Railway', icon: 'simple-icons:railway' },
      { name: 'Supabase', icon: 'logos:supabase-icon' },
      { name: 'Domain Management', icon: 'fluent:globe-20-regular' },
      { name: 'Custom Domains', icon: 'fluent:link-20-regular' },
      { name: 'Web Hosting', icon: 'fluent:server-20-regular' }
    ]
  },
  {
    title: 'Tools & Workflow',
    categoryIcon: 'fluent:developer-board-20-regular',
    skills: [
      { name: 'Git & GitHub', icon: 'logos:git-icon' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Jira', icon: 'logos:jira' },
      { name: 'Trello', icon: 'logos:trello' },
      { name: 'Notion', icon: 'logos:notion-icon' },
      { name: 'npm / pnpm', icon: 'logos:npm-icon' }
    ]
  }
]
</script>
