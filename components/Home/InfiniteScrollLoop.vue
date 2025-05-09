<template>
  <div class="py-36 md:container mx-auto px-4">
    <div>
      <h1
        class="uppercase text-center font-light text-lg tracking-widest pb-10"
      >
        Company I worked with
      </h1>
    </div>
    <div class="marquee-container">
      <div class="marquee-inner">
        <div class="marquee">
          <div
            v-for="(logo, i) in duplicatedLogos"
            :key="`logo-${i}`"
            class="logo-item"
          >
            <span class="text-3xl text-gray-400 font-bold">{{
              logo.title
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  { title: 'Digitalone' },
  { title: 'Thortok' },
  { title: 'Bloc' },
  { title: 'Digitalone' },
  { title: 'Thortok' },
  { title: 'Bloc' }
]

// Create duplicated array for seamless scrolling
const duplicatedLogos = [...logos, ...logos]
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent 0,
    black 128px,
    black calc(100% - 128px),
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0,
    black 128px,
    black calc(100% - 128px),
    transparent 100%
  );
}

.marquee-inner {
  display: flex;
  width: 200%; /* Makes room for duplicated content */
  animation: marquee 30s linear infinite; /* Adjust time to control speed */
}

.marquee {
  display: flex;
  width: 100%;
  align-items: center;
}

.logo-item {
  flex-shrink: 0;
  margin: 0 2rem;
  display: flex;
  align-items: center;
}

.logo-item img {
  max-width: none;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move exactly half the total width */
  }
}
</style>
