<template>
  <div>
    <h1 class="text-[45px]">Project</h1>
    <div class="my-4">
      <hr class="border-t-2 border-gray-300" />
    </div>
  </div>

  <div class="grid grid-cols-3 grid-flow-row gap-4 relative">
    <div class="flex flex-col gap-6">
      <h1 class="text-xl">01Example</h1>
      <NuxtImg
        src="/images/banner.png"
        class="sm:w-[370px] sm:h-[558px] object-cover w-full h-auto"
        alt="Banner"
      />
    </div>
    <div class="flex flex-col gap-6">
      <h1 class="text-xl">01Example</h1>
      <NuxtImg
        src="/images/banner.png"
        class="sm:w-[370px] sm:h-[558px] object-cover w-full h-auto"
        alt="Banner"
      />
    </div>
    <div class="flex flex-col gap-6">
      <h1 class="text-xl">01Example</h1>
      <NuxtImg
        src="/images/banner.png"
        class="sm:w-[370px] sm:h-[558px] object-cover w-full h-auto"
        alt="Banner"
      />
    </div>

    <div class="absolute top-[300px] -right-10">
      <Icon
        icon="iconamoon:arrow-right-6-circle-light"
        height="80"
        width="80"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
