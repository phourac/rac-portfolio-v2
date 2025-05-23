<template>
  <ChildCom :name="refName" :handle-c-lick="handleCLick">
    <template #header><p>testing</p></template>
  </ChildCom>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChildCom from '~/components/test/ChildCom.vue'

const refName = ref('hello')
const handleCLick = () => {
  refName.value = 'baby'
}
</script>
