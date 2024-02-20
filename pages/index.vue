<template>
  <div class="p-8">
    <div class="mb-5">
      <div class="flex gap-4 overflow-auto pb-2 text-xs">
        <div v-for="(option, i) in optionShop" :key="i" class="cursor-pointer">
          <div
            class="hover:bg-gray-500/20 border-2 border-gray-700 p-2 rounded-full flex gap-2 bg-gray-100 items-center"
          >
            <!-- hover:animate-pulse -->
            <div class="">
              <span
                :class="option.color"
                class="border-gray-700 rounded-full p-1 border-2 w-6 h-4 px-2"
              >
                <i :class="option.classIcon" class="text-sm"></i>
              </span>
            </div>
            <div class="">
              {{ option.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Head Content -->
    <div>
      <div class="text-xl mb-2 pl-4">
        <span
          class="flex gap-2 bg-red-500/20 rounded-full w-32 px-2 py-[2px] items-center justify-center"
          ><i class="fa-solid fa-mug-hot"></i>
          <h1 class="">Coffee</h1>
        </span>
      </div>
      <ShopCoffee />
    </div>
    <hr class="my-5 border-gray-600/0" />
    <!-- Sub Content -->
    <div>
      <div class="text-xl mb-2 pl-4">
        <span
          class="flex gap-2 bg-green-500/20 rounded-full w-32 px-2 py-[2px] items-center justify-center"
          ><i class="fa-solid fa-mug-hot"></i>
          <h1 class="">Plant</h1>
        </span>
      </div>
      <ShopPlant />
    </div>
  </div>
</template>

<script setup lang="ts">
const hoverSort = ref<string>("");
const optionShop = [
  {
    value: "coffee",
    label: "Coffee",
    classIcon: "fa-solid fa-mug-hot",
    color: "bg-red-200",
    active: false,
  },
  {
    value: "drink",
    label: "Drink",
    classIcon: "fa-solid fa-martini-glass-citrus",
    color: "bg-blue-200",
    active: false,
  },

  {
    value: "plant",
    label: "Plant",
    classIcon: "fa-solid fa-seedling",
    color: "bg-green-200",
    active: false,
  },
];

const hover = async (value: any, index: any) => {
  if (value == "I") {
    hoverSort.value = index;
  } else {
    hoverSort.value = index;
  }
};
</script>

<style lang="scss" scoped>
.shadow {
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
}
</style>
