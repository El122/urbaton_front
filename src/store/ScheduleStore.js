import { defineStore } from 'pinia'
import scheduleAPI from '@/api/schedule'

export const useScheduleStore = defineStore('scheduleStore', {
    state: () => ({
        teacherInfo: [],
    }),
    getters: {
      // определите геттеры здесь, если они нужны
    },
    actions: {
      async getTeacherSchedule(id) {
        try {
          const response = await scheduleAPI.getTeacherSchedule(id)
        } catch (error) {
            console.log(error)
        }
      },
      async getStudentSchedule(id) {
        try {
          const response = await scheduleAPI.getStudentSchedule(id)
        } catch (error) {
            console.log(error)
        }
      }
    },
  })