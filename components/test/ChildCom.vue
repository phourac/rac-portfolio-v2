<template>
  <h1>{{ name }}</h1>
  <h1>{{ props.name }}</h1>
  <h1>{{ counter }}</h1>

  <button @click="props.handleCLick">click</button>
  <slot name="header" />
  <button @click="changeProps">chnage</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  check?: boolean
  handleCLick: () => void
}>()

import { ref } from 'vue'

import { useCounter } from '../../composables/useGlobalState'

const { counter } = useCounter()

const name = ref(props.name)

const changeProps = () => {
  name.value = 'testing'
  counter.value = counter.value + 20
}
</script>
