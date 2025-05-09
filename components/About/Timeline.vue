<template>
  <div class="min-h-screen text-gray-200 p-6">
    <div class="max-w-3xl mx-auto">
      <!-- Timeline component -->
      <div class="relative pl-12">
        <!-- Vertical line with dot -->
        <div class="absolute left-4 top-0 h-full w-px bg-gray-700"></div>

        <!-- Loop through timeline items and render each one -->
        <div
          v-for="(item, index) in timelineItems"
          :key="index"
          class="relative mb-16"
          :ref="(el) => (timelineRefs[index] = el)"
        >
          <div class="flex justify-between items-center mb-2">
            <div
              class="bg-transparent border border-gray-300 text-paper px-4 py-2 rounded-full text-sm font-mono"
            >
              {{ item.date }}
            </div>
          </div>

          <div class="mt-0">
            <h2 class="text-2xl font-bold text-gray-300 mb-2 py-2">
              {{ item.company }}
            </h2>
            <h3 class="text-gray-400 mb-3">@ {{ item.role }}</h3>
            <p class="text-gray-300 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define an array of timeline items
const timelineItems = [
  {
    date: '2019 - 2023',
    company: 'Royal University of Phnom Penh',
    role: 'Computer Science Student',
    description:
      'I am a student at the Royal University of Phnom Penh, pursuing a degree in Computer Science. I have gained a solid foundation in programming languages, algorithms, and software development principles.'
  },
  {
    date: '2022 - 2023',
    company: 'Koompi',
    role: 'Web Apprentice',
    description:
      'As a Web Apprentice, I learned the basics of web development and design. I completed projects using React and Figma.'
  },
  {
    date: '2023 - PRESENT',
    company: 'Digitalone',
    role: 'Web Developer',
    description:
      'As a Web Developer, I have successfully handled more than 10 projects over 1.5 years, gaining extensive experience across various types of projects. I have worked with modern technologies and frameworks, ensuring the delivery of high-quality, scalable solutions. My expertise includes utilizing Git for version control and collaborating effectively with teams using Jira for project management. I focus on creating modern, user-friendly interfaces and optimizing performance to meet client and user expectations.'
  },
  {
    date: '2024 - PRESENT',
    company: 'Freelancer',
    role: 'Web Developer',
    description:
      'As a Freelancer, I bring extensive experience in web development, focusing on creating bespoke solutions tailored to client needs. My work encompasses designing and building responsive websites and applications with an emphasis on performance, usability, and scalability. I have successfully collaborated with clients across various industries, delivering projects that align with their vision and goals. My expertise includes modern web technologies, problem-solving, and a commitment to continuous learning to stay ahead in the ever-evolving tech landscape. I am dedicated to delivering high-quality results while fostering strong professional relationships with clients.'
  }
]

// Create a ref to store the references of each timeline item
const timelineRefs = ref([])
</script>
