import axios from 'axios';
import { useUserStore } from '../store/UserStore';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    authUser(email, password) {
      return axios.post('/login', {
        email: email,
        password: password,
      }, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    logoutUser() {
      return axios.get('/logout', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
          }
        })
        .catch(function (error) {
          console.log(error);
        })
    }
}