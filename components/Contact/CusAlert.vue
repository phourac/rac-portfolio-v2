<template>
  <transition name="slide-down-up">
    <div
      v-if="visible"
      role="alert"
      :class="[
        'alert fixed top-4 right-4 z-50 shadow-lg flex items-center gap-2 w-auto max-w-fit px-4 py-2',
        alertTypeClass
      ]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ message }}</span>
    </div>
  </transition>
</template>

<script setup>
import { ref, watchEffect, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, required: true },
  message: { type: String, default: 'Success!' },
  type: { type: String, default: 'success' }, // can be 'success', 'error', etc.
  duration: { type: Number, default: 2000 }
})

const emit = defineEmits(['update:modelValue'])

const visible = ref(props.modelValue)

let timer
watchEffect(() => {
  visible.value = props.modelValue
  if (props.modelValue) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      emit('update:modelValue', false)
    }, props.duration)
  }
})

onUnmounted(() => clearTimeout(timer))

const alertTypeClass = computed(() => {
  switch (props.type) {
    case 'error':
      return 'alert-error'
    case 'info':
      return 'alert-info'
    default:
      return 'alert-success'
  }
})
</script>

<style scoped>
.slide-down-up-enter-active,
.slide-down-up-leave-active {
  transition: all 0.4s ease;
}
.slide-down-up-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-down-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-down-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
