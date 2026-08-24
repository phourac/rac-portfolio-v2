<template>
  <div class="w-full py-8 flex flex-col items-start text-left">
    <!-- Category Filter Tabs (Flex Start) -->
    <div class="flex flex-wrap items-center justify-start gap-2.5 mb-12 w-full">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        class="px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300"
        :class="activeTab === tab.id
          ? 'bg-[#c4f000] text-black font-semibold shadow-lg shadow-[#c4f000]/20 scale-105'
          : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white hover:border-neutral-700'"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Timeline Container (Full Width & Flex Start) -->
    <div class="relative pl-6 sm:pl-10 w-full">
      <!-- Gradient Vertical Connecting Line -->
      <div class="absolute left-2.5 sm:left-4 top-2 bottom-6 w-0.5 bg-gradient-to-b from-[#c4f000] via-neutral-800 to-transparent" />

      <!-- Loop through items -->
      <div
        v-for="(item, index) in filteredItems"
        :key="index"
        class="relative mb-12 group w-full"
      >
        <!-- Glowing Timeline Node Dot -->
        <div class="absolute -left-[19px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-[#c4f000] group-hover:scale-125 group-hover:bg-[#c4f000] transition-all duration-300 shadow-[0_0_12px_rgba(196,240,0,0.4)] flex items-center justify-center">
          <span class="w-1.5 h-1.5 rounded-full bg-[#c4f000] group-hover:bg-black transition-colors" />
        </div>

        <!-- Timeline Card (Full Width) -->
        <div class="w-full bg-neutral-900/60 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 text-left">
          <!-- Top Row: Date Pill & Type Tag -->
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-950 text-[#c4f000] text-xs font-mono font-medium border border-neutral-800">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ item.date }}
            </span>
            <span class="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
              {{ item.type }}
            </span>
          </div>

          <!-- Role & Organization -->
          <h3 class="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
            {{ item.role }}
          </h3>
          <p class="text-base font-semibold text-[#c4f000] mb-4 flex items-center gap-1.5">
            <span>@ {{ item.company }}</span>
          </p>

          <!-- Description -->
          <p class="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {{ item.description }}
          </p>

          <!-- Skills / Technologies Pills -->
          <div v-if="item.skills && item.skills.length > 0" class="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/60">
            <span
              v-for="skill in item.skills"
              :key="skill"
              class="text-xs font-mono px-3 py-1 rounded-full bg-neutral-950 text-neutral-300 border border-neutral-800/80"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type TabType = 'all' | 'experience' | 'education'
const activeTab = ref<TabType>('all')

const tabs: { id: TabType; label: string }[] = [
  { id: 'all', label: 'All Journey' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'education', label: 'Education' }
]

const timelineItems = [
  {
    type: 'EDUCATION',
    category: 'education',
    date: '2019 - 2023',
    company: 'Royal University of Phnom Penh',
    role: 'Computer Science Degree',
    description:
      'Graduated with a degree in Computer Science, mastering core software engineering concepts, algorithmic design, database architecture, and web development fundamentals.',
    skills: ['Computer Science', 'Data Structures', 'Algorithms', 'OOP', 'Software Architecture']
  },
  {
    type: 'WORK EXPERIENCE',
    category: 'experience',
    date: '2022 - 2023',
    company: 'Koompi',
    role: 'Web Apprentice',
    description:
      'Initiated practical career in web design and development. Designed responsive web application prototypes and built interactive user interfaces using React and Figma.',
    skills: ['React', 'JavaScript', 'Figma', 'HTML5/CSS3', 'UI/UX Design']
  },
  {
    type: 'WORK EXPERIENCE',
    category: 'experience',
    date: '2023 - PRESENT',
    company: 'Digitalone',
    role: 'Web Developer',
    description:
      'Engineered and launched 10+ production web applications and enterprise portals over 1.5 years. Specialized in modern Vue 3 / Nuxt 3 & React frontend architectures, team collaboration via Jira, and version control via Git.',
    skills: ['Vue 3', 'Nuxt 3', 'React', 'TypeScript', 'Tailwind CSS', 'Git', 'Jira']
  },
  {
    type: 'WORK EXPERIENCE',
    category: 'experience',
    date: '2024 - PRESENT',
    company: 'Freelance Web Developer',
    role: 'Front-End Web Specialist',
    description:
      'Delivered custom web applications, e-commerce portals, and landing pages for diverse business clients. Focused on performance optimization, responsive UX design, and REST API integration.',
    skills: ['Full-Stack Integration', 'REST APIs', 'Performance Optimization', 'Tailwind CSS', 'Client Strategy']
  }
]

const filteredItems = computed(() => {
  if (activeTab.value === 'all') return timelineItems
  return timelineItems.filter(item => item.category === activeTab.value)
})
</script>
