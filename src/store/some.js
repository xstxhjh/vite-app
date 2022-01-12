
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      str: 'str data'
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})