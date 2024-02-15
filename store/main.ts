import { defineStore } from 'pinia'

interface State {
    isOpenMenu: boolean;
}

export const useStore = defineStore('index', {
    state: (): State => ({
          isOpenMenu: false,
      })
})
