import axios from 'axios';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    createNews(groupInfo) {
        return axios.post('news/create', {
            name: groupInfo.name,
            teacher: groupInfo.teacher
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    updateNews(id, groupInfo) {
        return axios.post('news/' + id + '/update', {
            name: groupInfo.name,
            teacher: groupInfo.teacher
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    getAllNews() {
        return axios.get('news/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    getNewsByID(id) {
        return axios.get('news/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    deleteNews(id) {
        return axios.delete('news/' + id + '/delete', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}