<template>
  <div
    class="bg-gray-200 gap-4 overflow-auto p-5 rounded-xl w-full lg:w-fit flex"
  >
    <div v-for="(items, i) in shop" :key="i">
      <div
        class="w-[250px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500"
      >
        <div class="flex justify-center w-[200px] h-[160px]">
          <img class="w-full object-cover rounded-md" :src="items.img" />
        </div>
        <div class="mt-4">
          <h1 class="text-lg font-bold text-gray-700">{{ items.name }}</h1>
          <!-- <p class="text-xs mt-2 text-gray-700">Description</p> -->
          <p class="text-xs mt-2 text-gray-700 truncate">{{ items.desc }}</p>

          <!-- <div class="mt-3 space-x-4 flex p-1">
            <div
              class="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200"
            >
              <span class="block h-4 w-4 bg-green-400 rounded-full"> </span>
            </div>
            <div
              class="p-1 border-4 rounded-full cursor-pointer hover:border-blue-200 hover:scale-105 transition transform duration-200"
            >
              <span class="block h-4 w-4 bg-blue-400 rounded-full"> </span>
            </div>
            <div
              class="p-1 border-4 rounded-full cursor-pointer hover:border-yellow-200 hover:scale-105 transition transform duration-200"
            >
              <span class="block h-4 w-4 bg-yellow-400 rounded-full"> </span>
            </div>
          </div> -->
        </div>
        <div class="flex justify-end mt-4 gap-4">
          <nuxt-link :to="`/LeaningDetail/${items.id}`" class="w-full">
            <button
              class="w-full text-sm text-md block font-semibold py-2 px-6 text-green-100 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              รายละเอียดเพิ่มเติม
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ProductLiner } from "~/models/product.model";
const shop = ref<ProductLiner[]>([
  {
    id: 3,
    name: "Golang",
    img: "https://www.freecodecamp.org/news/content/images/2021/10/golang.png",
    desc: "Go เป็นภาษาการเขียนโปรแกรมระดับสูงที่รวบรวมและพิมพ์แบบคงที่ซึ่งออกแบบโดย Google โดย Robert Griesemer, Rob Pike และ Ken Thompson มันคล้ายกับภาษา C ",
    // color: "red",
  },
  {
    id: 4,
    name: "NestJS",
    img: "https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png",
    desc: "Nest JS เป็น Framework สำหรับการสร้าง Application ฝั่ง Server โดยใช้ Node.js",
    // color: "red",
  },
  {
    id: 5,
    name: "Nuxt3",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*qJppTMduXXhjgU2tZt9SfQ.png",
    desc: "Nuxt เป็น Framework ตัวหนึ่งที่สร้างขึ้นจาก Vue.JS สำหรับใช้พัฒนา web application ที่รองรับรูปแบบการ render ฝั่ง Server หรือที่เรียกกันว่า Server Side Rendering",
    // color: "red",
  },
]);
</script>

<style lang="scss" scoped></style>
