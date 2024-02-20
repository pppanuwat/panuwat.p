<template>
  <div class="bg-white mb-[1px] drop-shadow-2xl">
    <!-- bg-gray-800 -->
    <nav class="bg-white shadows">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              @click="openMenu"
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <!-- <img
                class="h-12 w-auto"
                src="https://png.pngtree.com/png-clipart/20230512/original/pngtree-isolated-front-view-cat-on-white-background-png-image_9158426.png"
                alt="Your Company"
              /> -->
              <h1 class="text-black font-bold">
                PP ~ COFFEE <span><i class="fa-solid fa-mug-hot"></i></span>
              </h1>
            </div>
            <div class="flex items-center">
              <div
                class="hidden pl-4 sm:block"
                v-for="(menu, i) in menuNab"
                :key="i"
              >
                <!-- class="hover:border-b-[1px] hover:border-primary w-fit max-lg:w-fit flex justify-center items-center" -->
                <nuxt-link
                  :to="menu.path"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-red-500/30 cursor-pointer"
                >
                  {{ menu.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div @click="openProfile">
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <div
                    class="text-white border-[1px] border-black p-2 rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    <i class="fa-regular fa-cart-shopping text-md"></i>
                  </div>
                </button>
              </div>

              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="{ hidden: isOpenProfile == false }"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-1"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-2"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div
        class="sm:hidden"
        id="mobile-menu "
        :class="{ hidden: isOpenMenu == false }"
      >
        <div
          class="space-y-1 px-2 pb-3 pt-2"
          v-for="(menu, i) in menuNab"
          :key="i"
        >
          <a
            :href="menu.path"
            class="text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
            :class="menu.active && 'bg-gray-900'"
            >{{ menu.name }}
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "~/store/main";
import type { MenuNavber } from "~/models/user.model";
const route = useRoute();
const store = useStore();
const isOpenProfile = ref<boolean>(false);
const isOpenMenu = ref<boolean>(false);

const openProfile = async () => {
  isOpenProfile.value = !isOpenProfile.value;
};

const openMenu = async () => {
  isOpenMenu.value = !isOpenMenu.value;
};

const menuNab = ref<MenuNavber[]>([
  {
    name: "Home",
    path: "/",
    active: false,
  },
  {
    name: "Pet Shop",
    path: "/shop",
    active: false,
  },
]);

watch(
  () => route.path,
  () => {
    initDate();
  }
);

onMounted(() => {
  initDate();
});

function initDate() {
  for (let i = 0; i < menuNab.value.length; i++) {
    const menu = menuNab.value[i];
    menu.active = (menu.path === route.path && true) || false;
  }
}
</script>

<style lang="scss">
// .shadows {
//   box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
// }
</style>
