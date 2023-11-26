import { defineStore } from 'pinia'
import parentsAPI from '../api/parents'
import { useSettingsStore } from './SettingStore'

export const useParentsStore = defineStore('parentsStore', {
  state: () => ({
    parentsInfo: [],
    parentsList: [],
  }),
  getters: {
    // определите геттеры здесь, если они нужны
  },
  actions: {
    async createParent(parentsInfo, childrenId) {
      try {
        await parentsAPI.createParent(parentsInfo, childrenId).then((response) => {
          if(response && response.status === 200) {
            useSettingsStore().setInfoMessage('Пользователь успешно добавлен')
            useSettingsStore().showInfoMessage()
          } else {
            useSettingsStore().setInfoMessage('Произошла непредвиденная ошибка, <br> попробуйте позже или свяжитесь с администартором')
            useSettingsStore().showInfoMessage()
          }
        })
      } catch(error) {
        
      }
    },
    async updateParent(id, parentsInfo) {
      try {
        await parentsAPI.updateParent(id, parentsInfo)
      } catch(error) {
        
      }
    },
    async getAllParents() {
      try {
        await parentsAPI.getAllParents().then((response)=> {
          if(response && response.status === 200) {
            this.parentsList = response.data.data
          }
        })

      } catch(error) {
        
      }
    },
    async getParentByID(id) {
      try {
        await parentsAPI.getParentByID(id).then((response)=> {
          if(response && response.status === 200) {
            this.parentsInfo = response.data
          }
        })
      } catch(error) {
        
      }
    },
    async deleteParent(id) {
      try {
        await parentsAPI.deleteParent(id).then((response) => {
          if(response && response.status === 200) {
              this.getAllParents()
          }
      })
      } catch(error) {
        
      }
    },
  },
})