<template>
  <div
    class="hamburger-menu md:hidden flex"
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :enter="{ opacity: 1, x: 0, transition: { delay: 600 } }"
  >
    <input
      type="checkbox"
      id="menu_checkbox"
      class="menu-checkbox"
      v-model="isDrawerOpen"
      @change="handleToggle"
    />
    <label for="menu_checkbox" class="menu-label">
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
      <div class="menu-bar"></div>
    </label>
  </div>
</template>

<script setup lang="ts">
// Use defineModel for v-model binding
const isDrawerOpen = defineModel<boolean>()

// Handle the checkbox toggle event
const handleToggle = (event: Event) => {
  const checkbox = event.target as HTMLInputElement
  isDrawerOpen.value = checkbox.checked // Update the drawer state based on checkbox
  console.log('Drawer state:', isDrawerOpen.value) // Debugging output
}
</script>

<style scoped>
/* Root container for the hamburger menu */
.hamburger-menu {
  position: relative;
  width: 30px;
  height: 30px;
}

/* Hide the checkbox */
.menu-checkbox {
  display: none;
}

/* Styling the label to act as the toggle button */
.menu-label {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px; /* Adjusted height for better spacing */
  cursor: pointer;
}

/* Background overlay for animations (optional) */
.menu-label:before {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  transition: background-color 1.2s cubic-bezier(0, 0.96, 1, 0.02);
}

/* The bars of the hamburger menu */
.menu-bar {
  width: 100%;
  height: 4px;
  background-color: var(--bar-color, #fff);
  border-radius: 2px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease,
    top 0.3s ease;
}

/* Consistent spacing between bars */
.menu-bar:not(:last-child) {
  margin-bottom: 6px;
}

/* Transformations for the open state */
.menu-checkbox:checked + .menu-label .menu-bar:first-child {
  transform: translateY(10px) rotate(45deg);
}

.menu-checkbox:checked + .menu-label .menu-bar:last-child {
  transform: translateY(-10px) rotate(-45deg);
}

.menu-checkbox:checked + .menu-label .menu-bar:nth-child(2) {
  opacity: 0;
}

/* Ensuring consistency when transitioning back to the closed state */
.menu-checkbox:not(:checked) + .menu-label .menu-bar {
  transform: translateY(0) rotate(0);
  opacity: 1;
}
</style>
