<template>
  <div>
    <div>
      <nuxt-link to="/"> Home</nuxt-link>
      <span> {{ route.path.replace("/", " / ") }} </span>
    </div>
    <div class="flex justify-center">
      <h1 class="font-bold">SHOP</h1>
    </div>
    <div>
      <div class="bg-gray-700/30 p-5 mt-2 rounded-lg">
        <!-- Menu -->
        <div class="flex gap-4">
          <div v-for="(menu, i) in menuShop" :key="i">
            <button type="button" @click="activateTab(i + 1)">
              {{ menu.name }} <i class="fa-solid fa-cat"></i>
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
              class="input-member pl-10 py-1 w-full rounded-lg"
            />
          </div>
        </div>

        <!-- product -->
        <div v-if="activeTab == 1">
          <div class="mt-4">
            <div
              v-for="(product, i) in itemShop"
              :key="i"
              class="flex gap-2 mt-6"
            >
              <img :src="product.img" class="rounded-lg w-24 h-24" />
              <div class="truncate ... p-2">
                <div>
                  <h1 class="font-bold flex items-center">
                    {{ product.name }}
                  </h1>
                  <h2 class="text-sm flex items-center">
                    {{ product.description }}
                  </h2>
                </div>
                <div class="flex items-center mt-4">
                  <h2 class="">Price: <span>300</span></h2>
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
import type { MenuShops, Product } from "~/models/product.model";
const route = useRoute();
const router = useRouter();

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
    name: "Cat",
    img: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    description:
      "แมว (ชื่อวิทยาศาสตร์: Felis catus) เป็นสปีชีส์สัตว์เลี้ยงของสัตว์เลี้ยงลูกด้วยนมกินเนื้อขนาดเล็ก โดยเป็นแมวสปีชีส์เดียวในวงศ์เสือและแมว ที่ถูกปรับเป็นสัตว์เลี้ยง และมักเรียกเป็น แมวบ้าน",
  },
  {
    name: "Dog",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    description:
      "หมา หรือคำสุภาพว่า สุนัข เป็นสัตว์ที่สืบเชื้อสายมาจากหมาป่าที่ปรับตัวเป็นสัตว์เลี้ยงที่มักชูหางขึ้นสูง หมาสืบสายพันธุ์จากหมาป่าโบราณที่สูญพันธุ์แล้ว และญาติใกล้ชิดกับหมาที่สุดที่ยังมีชีวิตอยู่คือหมาป่าสมัยใหม่ หมาเป็นสัตว์สปีชีส์แรกที่ถูกปรับเป็นสัตว์เลี้ยงให้กับคนเก็บของป่าล่า",
  },
  {
    name: "Duck",
    img: "https://hips.hearstapps.com/hmg-prod/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=2048:*",
    description:
      "ป็ด เป็นสัตว์ปีกในวงศ์นกเป็ดน้ำ ปากแบน ตีนแบน ระหว่างนิ้วมีพังผืดยึดติดกันเพื่อสะดวกในการว่ายน้ำ ตัวมีหลายสี เช่น น้ำตาล ขาว เขียว ชมพู ม่วง ขนาดเล็กกว่าห่าน ว่ายน้ำเก่ง กินปลา พืชน้ำและสัตว์เล็ก ๆ มีต้นตระกูลมาจากเป็ดแมลลาร์ด เป็ดเป็นนกน้ำที่มีขนาดเล็กกว่าหงส์และห่าน และสามารถพบได้ทั้งในน้ำจืดและน้ำเค็ม",
  },
]);

function activateTab(tab: number) {
  activeTab.value = tab;
}
</script>

<style lang="scss" scoped></style>
