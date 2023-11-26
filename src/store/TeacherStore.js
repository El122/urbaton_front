import { defineStore } from 'pinia'
import teacherAPI from '../api/teacher'
import { useSettingsStore } from './SettingStore'

export const useTeacherStore = defineStore('teacherStore', {
  state: () => ({
    teacherInfo: [],
    teacherList: [],
  }),
  getters: {
    // определите геттеры здесь, если они нужны
  },
  actions: {
    async createTeacher(teacherInfo) {
      try {
        await teacherAPI.createTeacher(teacherInfo).then((response) => {
          if(response && response.status === 200) {
            useSettingsStore().setInfoMessage('Пользователь создан!')
            useSettingsStore().showInfoMessage()
            setTimeout(() => {
              document.location.href = '/teachers'
            }, 1000)
          } else {
            useSettingsStore().setInfoMessage('Непредвиденная ошибка!')
            useSettingsStore().showInfoMessage()
          }
      })
      } catch(error) {
        
      }
    },
    async updateTeacher(id, teacherInfo) {
      try {
        await teacherAPI.updateTeacher(id, teacherInfo)
      } catch(error) {
        
      }
    },
    async getAllTeachers() {
      try {
        await teacherAPI.getAllTeachers().then((response) => {
          if(response && response.status === 200) {
            this.teacherList = response.data.data
          }
        })
      } catch(error) {
        
      }
    },
    async getTeacherByID(id) {
      try {
        await teacherAPI.getTeacherByID(id).then((response) => {
          if(response && response.status === 200) {
            this.teacherInfo = response.data
          }
        })

      } catch(error) {
        
      }
    },
    async deleteTeacher(id) {
      try {
        await teacherAPI.deleteTeacher(id).then((response) => {
          if(response && response.status === 200) {
              this.getAllTeachers()
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