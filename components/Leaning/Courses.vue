<template>
  <div class="bg-gray-200 gap-4 overflow-auto p-5 rounded-xl w-full lg:w-fit flex">
    <div v-for="(items, i) in shop" :key="i">
      <div
        class="w-[250px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500"
      >
        <div class="flex justify-center w-[200px] h-[160px]">
          <img class="w-full object-cover rounded-md" :src="items.img" />
        </div>
        <div class="mt-4 ">
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
        <div
          class="flex justify-end mt-4   gap-4 "
        >
          <nuxt-link :to="`/LeaningDetail/${items.id}`"
          class="w-full">
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
    id: 1,
    name: "TyptScript",
    img: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    desc: "TypeScript เป็นภาษาโปรแกรมระดับสูงแบบโอเพ่นซอร์สฟรีที่พัฒนาโดย Microsoft ซึ่งเพิ่มการพิมพ์แบบสแตติกพร้อมคำอธิบายประกอบประเภททางเลือกให้กับ JavaScript",
    // color: "red",
  },
  {
    id: 2,
    name: "Scss",
    img: "https://i0.wp.com/techprimelab.com/wp-content/uploads/2020/06/SCSS-or-CSS.jpg?fit=1200%2C675&ssl=1",
    desc:"Sass เป็นภาษาสคริปต์ตัวประมวลผลล่วงหน้าที่ตีความหรือรวบรวมเป็น Cascading Style Sheets SassScript เป็นภาษาสคริปต์"
    // color: "red",
  },
  {
    id: 3,
    name: "JS",
    img: "data:image/png;base64,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",
    desc:"Sass เป็นภาษาสคริปต์ตัวประมวลผลล่วงหน้าที่ตีความหรือรวบรวมเป็น Cascading Style Sheets SassScript เป็นภาษาสคริปต์"
    // color: "red",
  },
//   {
//     id: 3,
//     name: "Golang",
//     img: "https://www.freecodecamp.org/news/content/images/2021/10/golang.png",
//    desc:"Go เป็นภาษาการเขียนโปรแกรมระดับสูงที่รวบรวมและพิมพ์แบบคงที่ซึ่งออกแบบโดย Google โดย Robert Griesemer, Rob Pike และ Ken Thompson มันคล้ายกับภาษา C "
//   },
//   {
//     id: 4,
//     name: "NestJS",
//     img: "https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png",
//    desc:"Nest JS เป็น Framework สำหรับการสร้าง Application ฝั่ง Server โดยใช้ Node.js"
//   },
]);
</script>

<style lang="scss" scoped></style>
