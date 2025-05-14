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

    <div class="grid grid-cols-12 gap-4">
      <div
        v-for="(item, i) in personal_project"
        :key="i"
        :class="
          i < 2 ? 'col-span-12 lg:col-span-6' : 'col-span-12 lg:col-span-4'
        "
      >
        <WorkCard :img="item.img" :title="item.title" :index="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
