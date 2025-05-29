<template>
  <!-- <h1>{{ name }}</h1> -->
  <!-- <h1>{{ props.name }}</h1> -->
  <!-- <h1>{{ counter }}</h1> -->

  <!-- <button @click="props.handleCLick">click</button> -->
  <slot name="header" />
  <!-- <button @click="changeProps">chnage</button> -->
  <p>{{ props.listRef?.length! > 0 ? 'Yes' : 'No' }}</p>
  <p>{{ JSON.stringify(props.listRef) }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  check?: boolean
  handleCLick: () => void
  listRef?: { name: string; sex: string; phone: string }[]
}>()

import { ref } from 'vue'

import { useCounter } from '../../composables/useGlobalState'

const { counter } = useCounter()

const name = ref(props.name)

const listComputed = computed(() => {
  props.listRef?.length! > 0 ? 'Yes' : 'No'
})

const changeProps = () => {
  name.value = 'testing'
  counter.value = counter.value + 20
}
</script>
