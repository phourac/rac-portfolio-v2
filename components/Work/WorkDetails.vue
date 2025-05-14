<template>
  <div
    class="h-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 md:pt-16 pt-8 md:container mx-auto px-8 py-8"
  >
    <!-- Text section -->
    <div class="flex flex-col w-full lg:w-3/5">
      <!-- Title -->
      <h2
        class="md:text-[64px] text-[40px] leading-[1.1] mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-bold"
      >
        {{ title }}
      </h2>

      <!-- Description -->
      <p class="text-[18px] leading-[28px] text-gray-300 mb-6">
        My personal projects showcase my passion for web development and
        problem-solving. These projects highlight my ability to design and
        implement innovative solutions, leveraging modern technologies to create
        impactful and user-friendly applications.
      </p>

      <!-- Tools / Libraries used -->
      <div class="mb-6">
        <h3 class="text-[18px] font-semibold text-white mb-2">
          Technologies Used:
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project?.technologies || []"
            :key="tech"
            class="bg-gray-800 text-white text-sm px-3 py-1 rounded-full border border-gray-700"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- External Links -->
      <div class="flex gap-4 mt-4">
        <!-- <a
          v-if="project?.demo"
          :href="project.demo"
          target="_blank"
          class="bg-white text-black font-semibold px-5 py-2 rounded hover:bg-gray-200 transition"
        >
          Live Demo
        </a> -->
        <AnimatedButton
          :href="project?.demo"
          label="Live Demo"
          bgColor="bg-white"
          textColor="text-black"
          hoverTextColor="text-black"
        />
        <AnimatedButton
          :href="project?.github"
          label="Github"
          bgColor="bg-black"
          textColor="text-gray-400"
          hoverTextColor="#ffffff"
        />
      </div>
    </div>

    <!-- Optional image preview -->
    <div v-if="project?.img" class="w-full lg:w-2/5">
      <img
        :src="project.img"
        :alt="project.title"
        class="rounded-xl shadow-lg object-cover w-full"
      />
    </div>
  </div>

  <LetsTalk />
</template>

<script setup lang="ts">
import AnimatedButton from '../AnimatedButton.vue'
import LetsTalk from '../Home/LetsTalk.vue'

const route = useRoute()
const slug = route.params.slug

// Example structure

const project = personal_project.find((p) => p.slug === slug)
const title = project?.title || 'Project Not Found'
</script>
