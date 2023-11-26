import { defineStore } from 'pinia'
import studentsAPI from '../api/student'
import { useSettingsStore } from './SettingStore'
import { useParentsStore } from './ParentsStore'

export const useStudentsStore = defineStore('studentsStore', {
  state: () => ({
    studentInfo: [],
    studentsList: [],
  }),
  getters: {
    // определите геттеры здесь, если они нужны
  },
  actions: {
    async createStudent(teacherInfo, firstParent, secondParent) {
      try {
        await studentsAPI.createStudent(teacherInfo).then((response) => {
          if(response && response.status === 200) {
            if(firstParent) {
              useParentsStore().createParent(firstParent, response.data.data.id)
            }
            if(secondParent) {
              useParentsStore().createParent(secondParent, response.data.data.id)
            }
            useSettingsStore().setInfoMessage('Пользователь создан!')
            useSettingsStore().showInfoMessage()
            setTimeout(() => {
              document.location.href = '/students'
            }, 1000)
          } else {
            useSettingsStore().setInfoMessage('Непредвиденная ошибка!')
            useSettingsStore().showInfoMessage()
          }
      })
      } catch(error) {
        
      }
    },
    async updateStudent(id, groupInfo) {
      try {
        await studentsAPI.updateStudent(id, groupInfo)
      } catch(error) {
        
      }
    },
    async getAllStudents() {
      try {
        await studentsAPI.getAllStudents().then((response)=> {
          if(response && response.status === 200) {
            this.studentsList = response.data.data
          }
        })

      } catch(error) {
        
      }
    },
    async getStudentByID(id) {
      try {
        await studentsAPI.getStudentByID(id).then((response)=> {
          if(response && response.status === 200) {
            this.studentInfo = response.data
          }
        })
      } catch(error) {
        
      }
    },
    async deleteStudent(id) {
      try {
        await studentsAPI.deleteStudent(id).then((response) => {
          if(response && response.status === 200) {
              this.getAllStudents()
          }
      })
      } catch(error) {
        
      }
    },
  },
})