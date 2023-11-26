import { defineStore } from 'pinia'

import { useSettingsStore } from './SettingStore'
import userAPI from '../api/user'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userInfo: {
      name: '',
      surname: '',
      patronymic: '',
      email: '',
      password: '',
      phone: '',
      experience: '',
      group: '',
    },
    userToken: ''
  }),
  actions: {
    async authUser(email, password) {
      try {
       await userAPI.authUser(email, password).then((response => {
          const userData = response.data.data.user
          const userToken = response.data.data.token
          const userRole = response.data.data.userRole
          
          this.userInfo = userData
          this.userInfo.role = userRole
          localStorage.setItem('userInfo', JSON.stringify(userData))
          
          this.userToken = userToken
          localStorage.setItem('userToken', userToken)
          useSettingsStore().setInfoMessage('Вы успешно авторизовались!')
          useSettingsStore().showInfoMessage()
          setTimeout(() => {
            document.location.href = '/'
          },3000)
        }))
      } catch (error) {
        console.log(error)
      }
    },
    async logout() {
      try {
        await userAPI.logoutUser().then((response) => {
          if(response.status = 200) {
            localStorage.setItem('userToken', '')
            localStorage.setItem('userInfo', '')
            document.location.href = '/'
          }
        })
      } catch (error) {
        console.log(error)
      }
      
    }
  },
})
