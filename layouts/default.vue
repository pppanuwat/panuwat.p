<template>
  <div class="font min-h-screen bg-background">
    <Navbar />
    <div class="flex justify-center items-center mt-5 max-sm:mt-0">
      <div class="w-5/6 max-sm:w-full mb-32 bg-gray-200 lg:rounded-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.font {
  /* font-family: "Merienda", cursive; */
  font-family: 'Café Françoise', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  /* background-color: #e2dfdf */
}
</style>
