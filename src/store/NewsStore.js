import { defineStore } from 'pinia'
import newsAPI from '../api/news'

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    newsInfo: [],
    newsList: [],
  }),
  actions: {
    async createNews(newsInfo) {
      try {
        await newsAPI.createNews(newsInfo)
      } catch(error) {
        
      }
    },
    async updateNews(id, newsInfo) {
      try {
        await newsAPI.updateNews(id, newsInfo)
      } catch(error) {
        
      }
    },
    async getAllNews() {
      try {
        await newsAPI.getAllNews().then((response) => {
          if(response && response.status === 200) {
            this.newsList = response.data.data
          }
        })
      } catch(error) {
        
      }
    },
    async getNewsByID(id) {
      try {
        await newsAPI.getNewsByID(id).then((response) => {
          if(response && response.status === 200) {
            this.newsInfo = response.data.data
          }
        })

      } catch(error) {
        
      }
    },
    async deleteNews(id) {
      try {
        await newsAPI.deleteNews(id)
      } catch(error) {
        
      }
    },
  },
})