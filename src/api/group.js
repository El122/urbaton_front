import axios from 'axios';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    createGroup(groupInfo) {
        return axios.post('groups/create', {
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
    updateGroup(id, groupInfo) {
        return axios.post('groups/' + id + '/update', {
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
    getAllGroups() {
        return axios.get('groups/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    getGroupByID(id) {
        return axios.get('groups/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    deleteGroup(id) {
        return axios.post('groups/' + id + '/delete', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}