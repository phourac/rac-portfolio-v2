<template>
  <ChildCom :name="refName" :handle-c-lick="handleCLick" :listRef="listRef">
    <template #header><p>testing</p></template>
  </ChildCom>
  <!-- <p>{{ JSON.stringify(listRef) }}</p> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildCom from '~/components/test/ChildCom.vue'

const refName = ref('hello')

const listRef = ref<{ name: string; sex: string; phone: string }[]>([
  { name: 'test', phone: '098765432', sex: 'male' },
  { name: 'test', phone: '098765432', sex: 'male' }
])
const handleCLick = () => {
  refName.value = 'baby'
}
</script>
