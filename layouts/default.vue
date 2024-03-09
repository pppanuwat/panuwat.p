<template>
  <div class="font min-h-screen bg-background">
    <div v-show="store.acccount == 'std'">
      <NavbarLeaning />
    </div>
    <!-- <div v-show="store.acccount != 'std'">
      <Navbar />
    </div> -->
    <div class="flex justify-center items-center mt-5 max-sm:mt-0">
      <!-- default bg-gray-200 -->
      <div class="w-5/6 max-sm:w-full mb-32  lg:rounded-md">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from "~/store/main";
import { ref } from "vue";
const store = useStore();
</script>

<style scoped lang="scss">
/* @import url("https://fonts.cdnfonts.com/css/cafeta"); */
/* @import url('https://fonts.cdnfonts.com/css/kafeine-personal-use'); */
@import url("https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700");

.font {
  /* background-color: #e2dfdf */
  /* font-family: "Merienda", cursive; */
  /* font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal; */

  /* font-family: "cafeta", sans-serif; */
  /* font-family: 'Kafeine Personal Use', sans-serif;
   font-weight: 200; */
  font-family: "Open Sans Condensed", sans-serif;
}
</style>
