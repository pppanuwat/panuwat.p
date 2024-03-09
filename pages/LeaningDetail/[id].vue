<template>
  <div class="bg-gray-100">
    <!-- product -->
    <div v-for="(product, i) in datas" :key="i">
      <div
       :class="product.color"
        class="p-5 bg-blue-400 rounded-t-lg h-[200px] flex justify-center items-center"
      >
        <div class="text-white font-bold flex items-center gap-2 text-4xl">
          <div>
            <img class="w-24 h-18 rounded-lg" :src="product.img" />
          </div>
          <div>: {{ product.name }}</div>
        </div>
      </div>
      <div class="p-5 mt-4">
        <div>
          <!-- content -->
          <div class="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked.value="checked" />
            <div class="collapse-title text-xl font-bold">
              {{ product.name }} คืออะไร
            </div>
            <div class="collapse-content">
              <div class="card card-side bg-base-100 shadow-xl px-4">
                <figure>
                  <img
                    class="w-24 h-24 rounded-lg"
                    :src="product.img"
                  />
                </figure>
                <div class="card-body w-24">
                  <h2 class="card-title texe-base">{{ product.name }}</h2>
                  <p>
                 {{ product.desc }}
                  </p>
                  <!-- <div class="card-actions justify-end">
                    <button class="btn btn-primary">Watch</button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title text-xl font-bold">Exercise</div>
            <div class="collapse-content">
              <div class="card card-side bg-base-100 shadow-xl p-4 min:h-32">
                <div>
                  <div>
                    <pre>     for (let index = 0; index  array.length; ) {</pre>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div class="collapse-title text-xl font-bold">เริ่มสร้างโปรเจค</div>
            <div class="collapse-content">
              <div class="card card-side bg-base-100 shadow-xl p-4 min:h-32">
                <div class="">
                  <div class="">
                    <div class="flex gap-2">
                      <span>1: </span>
                      <pre
                        class="language-bash shiki shiki-themes material-theme-lighter material-theme-lighter material-theme-palenight"
                      ><code><span>npx nuxi@latest init &lt;project-name&gt;</span></code></pre>
                      <span> yarn</span>
                    </div>
                    <div class="mt-2 pl-6">
                      <img :src="img" class="rounded-lg" />
                    </div>
                  </div>
                  <div>
                    <div class="flex gap-2 mt-2">
                      <span>2: </span>
                      <span> yarn install </span>
                    </div>
                    <div class="mt-2 pl-6">
                      <img :src="img2" class="rounded-lg" />
                    </div>
                  </div>
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
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { MenuShops, ProductLiner } from "../../models/product.model";
const route = useRoute();
const router = useRouter();
const itemId = ref<any>(route.params.id);
const activeTab = ref<number>(1);
const checked = ref<string>("");
const loading = ref<boolean>(false);
const datas = ref<any>();
const img = "/images/install.jpg";
const img2 = "/images/install_yarn.jpg";

const getData = async () => {
  loading.value = true;
  datas.value = shop.value.filter((e: any) => e.id == itemId.value);
  // console.log(datas.value, itemId);
};

const shop = ref<ProductLiner[]>([
  {
    id: 1,
    name: "TyptScript",
    img: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png",
    desc: "TypeScript เป็นภาษาโปรแกรมระดับสูงแบบโอเพ่นซอร์สฟรีที่พัฒนาโดย Microsoft ซึ่งเพิ่มการพิมพ์แบบสแตติกพร้อมคำอธิบายประกอบประเภททางเลือกให้กับ JavaScript",
    color: "bg-blue-400",
  },
  {
    id: 2,
    name: "Scss",
    img: "https://i0.wp.com/techprimelab.com/wp-content/uploads/2020/06/SCSS-or-CSS.jpg?fit=1200%2C675&ssl=1",
    desc: "Sass เป็นภาษาสคริปต์ตัวประมวลผลล่วงหน้าที่ตีความหรือรวบรวมเป็น Cascading Style Sheets SassScript เป็นภาษาสคริปต์",
    color: "bg-rose-400",
  },
  {
    id: 3,
    name: "Golang",
    img: "https://www.freecodecamp.org/news/content/images/2021/10/golang.png",
    desc: "Go เป็นภาษาการเขียนโปรแกรมระดับสูงที่รวบรวมและพิมพ์แบบคงที่ซึ่งออกแบบโดย Google โดย Robert Griesemer, Rob Pike และ Ken Thompson มันคล้ายกับภาษา C ",
    color: "bg-cyan-600",
  },
  {
    id: 4,
    name: "NestJS",
    img: "https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png",
    desc: "Nest JS เป็น Framework สำหรับการสร้าง Application ฝั่ง Server โดยใช้ Node.js",
    color: "bg-gray-400",
  },
  {
    id: 5,
    name: "Nuxt3",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*qJppTMduXXhjgU2tZt9SfQ.png",
    desc: "Nuxt เป็น Framework ตัวหนึ่งที่สร้างขึ้นจาก Vue.JS สำหรับใช้พัฒนา web application ที่รองรับรูปแบบการ render ฝั่ง Server หรือที่เรียกกันว่า Server Side Rendering",
    color: "bg-teal-800",
  },
]);

function activateTab(tab: number) {
  activeTab.value = tab;
}

onMounted(() => {
  getData();
});
</script>

<style lang="scss" scoped></style>
