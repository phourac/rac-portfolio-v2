<template>
  <div v-if="project" class="h-auto md:container mx-auto px-6 md:px-8 py-8 md:py-16">
    <!-- Top Navigation & Category Badge -->
    <div class="flex items-center justify-between gap-4 mb-6">
      <NuxtLink
        to="/work-experience"
        class="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Work & Experience
      </NuxtLink>
      <span v-if="project.category" class="text-xs uppercase font-semibold px-3.5 py-1 rounded-full bg-[#c4f000] text-black">
        {{ project.category }}
      </span>
    </div>

    <!-- Title -->
    <h1 class="md:text-[56px] text-[36px] leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-bold max-w-4xl">
      {{ project.name || project.title }}
    </h1>

    <!-- Apple Mac Mockup Window Frame -->
    <div v-if="allImages && allImages.length > 0" class="w-full max-w-4xl mx-auto mb-12">
      <div class="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f11] border border-neutral-800">
        <!-- Mac Title Bar Header -->
        <div class="h-10 px-4 bg-[#18181b] border-b border-neutral-800 flex items-center justify-between">
          <!-- Mac Traffic Light Buttons -->
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
            <span class="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
            <span class="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
          </div>

          <!-- Mac Safari / Chrome Address Bar Mockup -->
          <div class="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#09090b] border border-neutral-800/60 text-[11px] font-mono text-neutral-400 max-w-xs md:max-w-md truncate shadow-inner">
            <svg class="w-3 h-3 text-neutral-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span class="truncate">{{ displayUrl }}</span>
          </div>

          <!-- Spacer balancing top bar -->
          <div class="w-12 hidden sm:block" />
        </div>

        <!-- Mac Window Display Screen Viewport -->
        <div class="p-3 md:p-6 bg-gradient-to-b from-[#09090b] to-[#040405] flex items-center justify-center min-h-[240px] md:min-h-[360px]">
          <img
            :src="activeImage"
            :alt="project.name || project.title"
            class="w-full h-auto max-h-[440px] object-contain rounded-lg shadow-xl transition-all duration-300"
            @error="onImageError"
          />
        </div>
      </div>

      <!-- Thumbnail Selector -->
      <div v-if="allImages.length > 1" class="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
        <button
          v-for="(imgUrl, idx) in allImages"
          :key="idx"
          type="button"
          class="relative flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none"
          :class="activeImage === imgUrl ? 'border-[#c4f000] scale-105 shadow-md' : 'border-gray-800 opacity-50 hover:opacity-100'"
          @click="activeImage = imgUrl"
        >
          <img :src="imgUrl" :alt="`Screenshot ${idx + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>
    </div>

    <!-- Project Details Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-4">
      <!-- Main Content Area -->
      <div class="lg:col-span-7 flex flex-col">
        <h2 class="text-xl font-semibold text-white mb-4">
          Project Overview
        </h2>

        <!-- Description -->
        <div class="text-[18px] leading-[28px] text-gray-300 mb-8 project-description">
          <div v-if="isHtmlString(formattedDescription)" v-html="formattedDescription" class="prose prose-invert max-w-none prose-p:mb-4 prose-p:leading-relaxed prose-strong:text-white" />
          <p v-else class="whitespace-pre-line">{{ formattedDescription }}</p>
        </div>

        <!-- External Action Buttons -->
        <div class="flex flex-wrap gap-4 mt-2 mb-8">
          <AnimatedButton
            v-if="project.demo || project.demoUrl"
            :href="project.demo || project.demoUrl"
            label="Live Demo"
            bgColor="bg-white"
            textColor="text-black"
            hoverTextColor="text-black"
          />
          <AnimatedButton
            v-if="project.github || project.repositoryUrl"
            :href="project.github || project.repositoryUrl"
            label="Github Repo"
            bgColor="bg-black"
            textColor="text-gray-400"
            hoverTextColor="#ffffff"
          />
        </div>
      </div>

      <!-- Right Sidebar: Tech Stack, Responsibilities, Achievements -->
      <div class="lg:col-span-5 flex flex-col space-y-8">
        <!-- Technologies Used -->
        <div v-if="project.technologies && project.technologies.length > 0">
          <h3 class="text-lg font-semibold text-white mb-3">
            Technologies Used:
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="bg-gray-800 text-white text-sm px-4 py-1.5 rounded-full border border-gray-700/60"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Key Responsibilities -->
        <div v-if="project.responsibilities && project.responsibilities.length > 0">
          <h3 class="text-lg font-semibold text-white mb-3">
            Key Responsibilities:
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(resp, idx) in project.responsibilities"
              :key="idx"
              class="flex items-start gap-3 text-gray-300 text-base leading-relaxed bg-gray-900/50 p-4 rounded-2xl border border-gray-800/80"
            >
              <span class="mt-2 w-2 h-2 rounded-full bg-[#c4f000] flex-shrink-0" />
              <span>{{ resp }}</span>
            </li>
          </ul>
        </div>

        <!-- Key Achievements -->
        <div v-if="project.achievements && project.achievements.length > 0">
          <h3 class="text-lg font-semibold text-white mb-3">
            Key Achievements:
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(achieve, idx) in project.achievements"
              :key="idx"
              class="flex items-start gap-3 text-gray-200 text-base leading-relaxed bg-gray-900/80 p-4 rounded-2xl border border-gray-800"
            >
              <span class="mt-1 text-[#c4f000] flex-shrink-0 text-lg">★</span>
              <span>{{ achieve }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Loading / Not Found State -->
  <div v-else class="min-h-[50vh] flex flex-col items-center justify-center text-center px-4 py-20">
    <div v-if="pending" class="flex flex-col items-center gap-4">
      <div class="w-10 h-10 rounded-full border-2 border-gray-700 border-t-white animate-spin" />
      <p class="text-gray-400">Loading project details...</p>
    </div>
    <div v-else class="flex flex-col items-center gap-4">
      <h2 class="text-3xl font-bold text-white">Project Not Found</h2>
      <p class="text-gray-400 max-w-md">The project you are looking for might have been moved or doesn't exist.</p>
      <NuxtLink to="/work-experience" class="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition">
        Browse All Projects
      </NuxtLink>
    </div>
  </div>

  <LetsTalk />
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import AnimatedButton from '../AnimatedButton.vue'
import LetsTalk from '../Home/LetsTalk.vue'

const route = useRoute()
const slug = (route.params.slug as string) || ''
const { getProjectBySlug, pending } = useProjects()

const project = computed(() => getProjectBySlug(slug))

const formattedDescription = computed(() => {
  if (!project.value?.desc && !project.value?.description) return ''
  const rawDesc = project.value?.desc || project.value?.description
  if (Array.isArray(rawDesc)) return rawDesc.join(' ')
  return rawDesc || ''
})

const displayUrl = computed(() => {
  if (project.value?.demo || project.value?.demoUrl) {
    return project.value.demo || project.value.demoUrl
  }
  return `https://${slugify(project.value?.name || project.value?.title || 'project')}.app`
})

const isHtmlString = (text: string): boolean => {
  return /<[a-z][\s\S]*>/i.test(text)
}

const allImages = computed<string[]>(() => {
  if (!project.value) return []
  const imgs = ensureArray(project.value.images)
  if (imgs.length > 0) return imgs
  if (project.value.img) return ensureArray(project.value.img)
  return []
})

const activeImage = ref<string>('/images/default-image.jpg')

watchEffect(() => {
  if (allImages.value && allImages.value.length > 0) {
    activeImage.value = allImages.value[0]
  }
})

const onImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/images/default-image.jpg'
  }
}
</script>

<style scoped>
:deep(.project-description p) {
  margin-bottom: 1rem;
}
:deep(.project-description strong) {
  color: #ffffff;
}
</style>
