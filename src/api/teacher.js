import axios from 'axios';

axios.defaults.baseURL = 'http://urbaton.ielliena.ru/api';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8'

export default {
    createTeacher(teacherInfo) {
        return axios.post('teachers/create', {
            name: teacherInfo.name,
            surname: teacherInfo.surname,
            patronymic: teacherInfo.patronymic,
            email: teacherInfo.email,
            password: teacherInfo.password,
            phone: teacherInfo.phone,
            experience: teacherInfo.experience,
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    updateTeacher(id, teacherInfo) {
        return axios.post('teachers/' + id + '/update', {
            name: teacherInfo.name,
            teacher: teacherInfo.teacher
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    getAllTeachers() {
        return axios.get('teachers/', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    getTeacherByID(id) {
        return axios.get('teachers/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    deleteTeacher(id) {
        return axios.post('teachers/' + id + '/delete', {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    },
}