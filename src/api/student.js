import axios from 'axios';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
  createStudent(studentInfo) {
    return axios.post('students/create', {
        name: studentInfo.name,
        surname: studentInfo.surname,
        patronymic: studentInfo.patronymic,
        email: studentInfo.email,
        password: studentInfo.password,
        phone: studentInfo.phone,
        group: studentInfo.group,
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
updateStudent(id, studentInfo) {
    return axios.post('students/' + id + '/update', {
        name: studentInfo.name,
        teacher: studentInfo.teacher
    }, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
getAllStudents() {
    return axios.get('students/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
getStudentByID(id) {
    return axios.get('students/' + id, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
deleteStudent(id) {
    return axios.post('students/' + id + '/delete', {}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        }
    })
    .catch(function (error) {
        console.log(error);
    })
},
}