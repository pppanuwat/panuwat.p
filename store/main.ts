import { defineStore } from 'pinia'

interface State {
    isOpenMenu: boolean;
    acccount: string;
}

export const useStore = defineStore('index', {
    state: (): State => ({
          isOpenMenu: false,
            acccount: 'std',
      })
})
