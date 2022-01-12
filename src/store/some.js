
import { defineStore } from 'pinia'

export const useSomeStore = defineStore('some', {
  state: () => {
    return {
      str: 'str data'
    }
  },
  actions: {
    changeStr() {
      this.str = ''
    },
  },
})