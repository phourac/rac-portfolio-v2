<template>
  <div class="h-auto cursor-pointer w-full px-4">
    <div class="grid grid-cols-12 gap-4">
      <div
        v-for="(item, i) in personal_project"
        :key="i"
        :class="
          i < 2 ? 'col-span-12 lg:col-span-6' : 'col-span-12 lg:col-span-4'
        "
      >
        <WorkCard
          :img="item.img"
          :title="item.title"
          :index="i"
          :slug="item.slug"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
