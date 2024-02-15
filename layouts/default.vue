<template>
  <div class="font min-h-screen bg-background">
    <Navbar />
    <div class="flex justify-center items-center mt-5">
      <div class="w-5/6 mb-32">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.font {
  font-family: "Noto Sans Thai", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  font-variation-settings: "wdth" 100;
  color: #12263a;
}
</style>
