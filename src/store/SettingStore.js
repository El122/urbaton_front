import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', {
    state: () => ({
        infoMessage: '',
        infoMessageStatus: false
    }),
    actions: {
      setInfoMessage(msg) {
        this.infoMessage = msg
      },
      showInfoMessage() {
        this.infoMessageStatus = true
        setTimeout(() => {
            this.infoMessageStatus = false
        },3000)
      },
      hideInfoMessage() {
        this.infoMessageStatus = false
      },
    },
  })