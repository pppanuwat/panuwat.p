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
        <!-- Menu -->
        <div class="flex gap-6 pl-4">
          <div v-for="(menu, i) in menuShop" :key="i">
            <button type="button" @click="activateTab(i + 1)">
              {{ menu.name }}
            </button>
          </div>
        </div>

        <!-- search -->
        <div class="flex justify-center text-defaultDiv max-md:w-full mt-2">
          <div class="w-full flex items-center justify-center relative">
            <div class="absolute left-0 pl-4 flex items-center">
              <i class="fa-light fa-magnifying-glass text-secondary" />
            </div>
            <input
              type="text"
              class="input-member pl-10 py-1 w-full rounded-full border-[2px]"
            />
          </div>
        </div>

        <!-- product -->
        <div v-if="activeTab == 1">
          <div
            class="mt-4 overflow-auto max-sm:max-h-[50svh] max-sm:pr-2 lg:flex lg:grid-cols-4 lg:gap-2"
          >
            <div
              v-for="(product, i) in itemShop"
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
                  <!-- <div class="">
                    <span
                      class="border-[2px] rounded-full w-8 h-6 flex items-center justify-center"
                      >+</span
                    >
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-6" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuShops, Product } from "~/models/product.model";
const route = useRoute();
const router = useRouter();

const acccountS = ref<string>('test')

const activeTab = ref<number>(1);
const menuShop = ref<MenuShops[]>([
  {
    name: "All",
    img: "",
    description: "",
  },
  {
    name: "Hot",
    img: "",
    description: "",
  },
  {
    name: "Cold",
    img: "",
    description: "",
  },
]);

const itemShop = ref<Product[]>([
  {
    name: "Capuchino",
    img: "https://allwellhealthcare.com/wp-content/uploads/2023/06/weight-loss-coffee1.jpg",
    description: "CapuchinoCapuchinoCapuchinoCapuchino",
  },
  {
    name: "Espesso",
    img: "https://skeducation.com/wordpress/wp-content/uploads/2016/10/coffee2.jpg",
    description: "EspessoEspessoEspesso",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
  {
    name: "Macchiato",
    img: "https://anerdcooks.com/wp-content/uploads/2022/10/caramel_macchiato6.jpg",
    description: "MacchiatoMacchiatoMacchiato",
  },
]);

function activateTab(tab: number) {
  activeTab.value = tab;
}
</script>

<style lang="scss" scoped></style>
