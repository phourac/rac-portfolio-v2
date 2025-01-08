<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
<template>
  <div>
    <!-- <h1 class="text-3xl font-bold underline">Hello world!</h1> -->
    <Navbar />
    <div class="bg-primary h-[100%] px-16 py-8">
      <slot />
    </div>
  </div>
</template>
