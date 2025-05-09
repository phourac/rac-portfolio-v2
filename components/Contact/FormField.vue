<template>
  <div class="flex flex-col gap-2">
    <label :for="label" class="text-sm text-gray-300 font-medium">{{
      label
    }}</label>
    <component
      :is="isTextarea ? 'textarea' : 'input'"
      :type="type"
      :id="label"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full bg-white text-black px-4 py-3 rounded-lg border border-paper focus:outline-none"
      :rows="isTextarea ? 4 : undefined"
    />
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  type?: string
  modelValue: string
  error?: string
  placeholder?: string
  isTextarea?: boolean
}>()

defineEmits(['update:modelValue'])
</script>
