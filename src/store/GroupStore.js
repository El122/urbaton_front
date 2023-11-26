import { defineStore } from 'pinia'
import groupAPI from '../api/group'
import { useSettingsStore } from './SettingStore'

export const useGroupStore = defineStore('groupStore', {
    state: () => ({
        groupsList: [],
        groupInfo: [],
        creatingGroup: {
            name: '',
            teacher: null,
        },
    }),
    getters: {
      // определите геттеры здесь, если они нужны
    },
    actions: {
        async createGroup(groupInfo) {
            try {
                const response = await groupAPI.createGroup(groupInfo).then((response) => {
                    if(response && response.status === 200) {
                      useSettingsStore().setInfoMessage('Группа создана!')
                      useSettingsStore().showInfoMessage()
                      setTimeout(() => {
                        document.location.href = '/groups'
                      }, 1000)
                    } else {
                      useSettingsStore().setInfoMessage('Непредвиденная ошибка!')
                      useSettingsStore().showInfoMessage()
                    }
                })
            } catch(error) {

            }
        },
        async updateGroup(id, groupInfo) {
            try {
                const response = await groupAPI.updateGroup(id, groupInfo)
            } catch(error) {
                
            }
        },
        async getAllGroups() {
            try {
                const response = await groupAPI.getAllGroups()
                if(response && response.status === 200) {
                    this.groupsList = response.data.data
                }
            } catch(error) {
                
            }
        },
        async getGroupByID(id) {
            try {
                const response = await groupAPI.getGroupByID(id).then((response) => {
                    if(response && response.status === 200) {
                        this.groupInfo = response.data.data
                    }
                })

            } catch(error) {
                
            }
        },
        async deleteGroup(id) {
            try {
                await groupAPI.deleteGroup(id).then((response) => {
                    if(response && response.status === 200) {
                        this.getAllGroups()
                    } else {
                        useSettingsStore().setInfoMessage('Вы не можете удалить учителя!')
                        useSettingsStore().showInfoMessage()
                      }
                })
            } catch(error) {
                
            }
        },
    },
  })