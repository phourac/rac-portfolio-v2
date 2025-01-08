<template>
  <div class="relative min-h-screen">
    <!-- Image Section (Hidden on md and smaller) -->
    <NuxtImg
      src="/images/banner.png"
      class="hidden lg:block object-cover max-w-[400px] md:max-w-[500px] lg:max-w-[600px] w-full h-auto ml-auto lg:top-1/4"
      alt="Banner"
    />

    <!-- Text Section (Adjusted top gap) -->
    <div
      class="lg:absolute left-5 md:left-10 lg:top-1/3 lg:transform lg:-translate-y-1/2 w-[90%] max-w-[800px] px-5 md:px-10"
    >
      <h1
        class="text-[48px] lg:text-[64px] leading-tight text-primary font-bold"
      >
        Hi, I'm Phourac. <br />
        I am a front-end developer specializing in interfaces and web
        applications.
      </h1>
    </div>
  </div>
</template>
