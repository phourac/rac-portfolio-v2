<template>
  <div class="h-auto cursor-pointer w-full px-4">
    <!-- Loading Skeleton -->
    <div v-if="pending" class="grid grid-cols-12 gap-4">
      <div
        v-for="i in 3"
        :key="i"
        class="col-span-12 lg:col-span-4 h-[400px] bg-neutral-900 animate-pulse rounded-[10px]"
      />
    </div>

    <!-- Projects Grid -->
    <div v-else-if="personalProjects.length > 0" class="grid grid-cols-12 gap-4">
      <div
        v-for="(item, i) in personalProjects"
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
import WorkCard from '../WorkCard.vue'

const { personalProjects, pending } = useProjects()
</script>
