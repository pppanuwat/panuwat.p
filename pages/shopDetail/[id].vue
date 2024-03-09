<template>
  <div class="">
    <div class="">
      <div class="w-full bg-green-100 lg:hidden">
        <img
          class="max-sm:absolute"
          src="https://www.10wallpaper.com/wallpaper/1920x1200/1409/cup_of_coffee-high_quality_Wallpaper_1920x1200.jpg"
        />
      </div>
      <div
        class="w-full rounded-t-2xl bg-white p-5 max-sm:absolute max-sm:top-[18rem]"
      >
        <!-- product -->
        <div v-if="activeTab == 1">
          <div
            class="mt-4 overflow-auto max-sm:max-h-[50svh] max-sm:pr-2 lg:flex lg:grid-cols-4 lg:gap-2"
          >
            <div
              v-for="(product, i) in shop.filter((e:any)=> e.id == itemId )"
              :key="i"
              class="flex gap-2 mt-6 lg:p-5 lg:rounded-lg lg:bg-gray-400/30 lg:w-[300px] drop-shadow-2xl lg:border-2 lg:mb-4"
            >
              <div class="max-sm:w-24 max-sm:h-24 lg:w-24 lg:h-24">
                <img
                  :src="product.img"
                  class="rounded-lg w-full h-full border-2 border-gray-700"
                />
              </div>
              <div class="truncate ... p-2 w-full">
                <div>
                  <h1 class="font-bold flex items-center">
                    {{ product.name }}
                  </h1>
                  <h2 class="text-xs flex items-center text-black/40">
                    <!-- {{ product.description }} -->
                  </h2>
                </div>
                <div class="flex items-center mt-4 justify-between">
                  <div class=" ">Price: <span>300</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuShops, ProductLiner } from "../../models/product.model";
const route = useRoute();
const router = useRouter();
const itemId = ref<any>(route.params.id);
const activeTab = ref<number>(1);

// for (let i = 0; i < arrTest.value.length; i++) {
//   const e = arrTest.value[i];
//   for (let ii = 0; ii < arrTest.value.length; ii++) {
//     const ee = arrTest.value[ii];
//     if (e.name == ee.name) {
//     }

//   }
// }

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

function activateTab(tab: number) {
  activeTab.value = tab;
}
</script>

<style lang="scss" scoped></style>
