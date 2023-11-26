import axios from 'axios';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    createParent(parentsInfo, childrenId) {
    return axios.post('parents/create', {
        name: parentsInfo.name,
        surname: parentsInfo.surname,
        patronymic: parentsInfo.patronymic,
        email: parentsInfo.email,
        password: parentsInfo.password,
        phone: parentsInfo.phone,
        children: childrenId
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
updateParent(id, parentsInfo) {
    return axios.post('parents/' + id + '/update', {
        name: parentsInfo.name,
        teacher: parentsInfo.teacher
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
getAllParents() {
    return axios.get('parents/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
getParentByID(id) {
    return axios.get('parents/' + id, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
deleteParent(id) {
    return axios.post('parents/' + id + '/delete', { }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
}