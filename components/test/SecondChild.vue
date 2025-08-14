<template>
  <p>This is second Child</p>
  <p>{{ name }}</p>
</template>
<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
const name = toRef(props, 'name')
</script>
