<template>
  <ChildCom :name="refName" :handle-c-lick="handleCLick" :listRef="listRef">
    <template #header><p>testing</p></template>
  </ChildCom>
  <h1>......................</h1>
  <SecondChild :name="refName" />
  <!-- <p>{{ JSON.stringify(listRef) }}</p> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildCom from '~/components/test/ChildCom.vue'
import SecondChild from '~/components/test/SecondChild.vue'
import { onMounted } from 'vue'

const refName = ref('hello')

const listRef = ref<{ name: string; sex: string; phone: string }[]>([
  { name: 'test', phone: '098765432', sex: 'male' },
  { name: 'test', phone: '098765432', sex: 'male' }
])
const handleCLick = () => {
  refName.value = 'baby'
}

onMounted(() => {
  console.log(`refNameMounted`, refName.value)
}) // this will run after the component is mounted , run only once

watchEffect(() => {
  console.log(`refNameWatchEffect`, refName.value)
}) // this will run every time refName changes

watch(
  () => refName.value,
  (newValue, oldValue) => {
    console.log(`refNameWatch`, newValue, oldValue)
  }
) // this will run every time refName changes
</script>
