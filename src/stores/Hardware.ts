import { defineStore } from 'pinia'

interface State {
  hasConnection: boolean
}

export const useHardwareStore = defineStore('hardware', {
  state: (): State => ({
    hasConnection: navigator.onLine
  }),

  actions: {
    setNetwork(hasConnection: boolean): void {
      this.hasConnection = hasConnection
    }
  }
})
