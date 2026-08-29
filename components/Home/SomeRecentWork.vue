<template>
  <div class="h-auto cursor-pointer w-full px-4">
    <NuxtImg
      src="/images/work-scribble.svg"
      alt=""
      role="presentation"
      width="240"
      height="135"
      class="mb-2 ml-4"
      loading="lazy"
    />

    <!-- Loading Skeleton -->
    <div v-if="pending" class="grid grid-cols-12 gap-4">
      <div
        v-for="i in 3"
        :key="i"
        class="col-span-12 lg:col-span-4 h-[400px] bg-neutral-900 animate-pulse rounded-[10px]"
      />
    </div>

    <!-- Projects Grid -->
    <div v-else class="grid grid-cols-12 gap-4">
      <div
        v-for="(item, i) in displayProjects"
        :key="item._id || item.slug || i"
        :class="
          i < 2 ? 'col-span-12 lg:col-span-6' : 'col-span-12 lg:col-span-4'
        "
      >
        <WorkCard
          :img="item.img || '/images/default-image.jpg'"
          :title="item.title || item.name"
          :index="i"
          :slug="item.slug || ''"
          :category="item.category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import WorkCard from '../WorkCard.vue'

const { projects, pending } = useProjects()

const displayProjects = computed(() => {
  if (projects.value && projects.value.length > 0) {
    return projects.value.slice(0, 5)
  }
  return []
})
</script>
