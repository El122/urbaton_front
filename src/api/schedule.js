import axios from 'axios';
import { useScheduleStore } from '../store/ScheduleStore';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    getTeacherSchedule(id) {
        return axios.get('' + id, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
          })
          .catch(function (error) {
            console.log(error);
          })
    },
    getStudentSchedule(id) {
        return axios.get('' + id, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
          })
          .catch(function (error) {
            console.log(error);
          })
    },
}