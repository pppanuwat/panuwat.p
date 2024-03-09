<template>
  <div class="bg-gray-100 gap-4 overflow-auto p-5 rounded-xl w-full flex">
    <div v-for="(items, i) in shop" :key="i">
      <div
        class="w-[250px] p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500"
      >
        <div class="flex justify-center w-[200px] h-[160px]">
          <img class="w-full object-cover rounded-md" :src="items.img" />
        </div>
        <div class="mt-4">
          <h1 class="text-lg font-bold text-gray-700">{{ items.name }}</h1>
          <p class="text-xs mt-2 text-gray-700">Two sizes</p>
          <div class="mt-3 space-x-4 flex p-1">
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
          </div>
          <div class="mt-4 mb-2 flex justify-between pl-4 pr-2 gap-4">
            <button
              class="block text-lg font-semibold text-gray-700 cursor-auto"
            >
              $ <span>{{ items.pice }}</span>
            </button>
            <nuxt-link :to="`/shopDetail/${items.id}`">
              <button
                class="text-md block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
              >
                Buy
              </button>
            </nuxt-link>
          </div>
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
    name: "Capuchino",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG",
    pice: 20,
    color: "red",
  },
  {
    id: 2,
    name: "Machiato",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTOO_00KteMxjBezIRrN3Cgvy3q4dsG-vIP8Uwl2uaFnFOC32P_7uoscoG4nHshktgFE&usqp=CAU",
    pice: 34,
    color: "red",
  },
  {
    id: 3,
    name: "Latte",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFVXtehrmV86Ute9kjb9CSFqrdEb9_kY5NuXe1zdqih5BaRm-GQcXEeoEDnlYTe6d4TQ&usqp=CAU",
    pice: 55,
    color: "red",
  },
]);
</script>

<style lang="scss" scoped></style>
