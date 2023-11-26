<template>
    <section id="addUser">
        <div class="container">
            <div class="section-label">Добавление пользователя</div>
            <div class="row">
                <div class="col-10">
                    <form class="add-user__form">
                        <div class="add-user__form-input">
                            <span>Фамилия</span>
                            <input v-model="userInfo.surname" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Телефон</span>
                            <input v-model="userInfo.phone" v-maska data-maska="+7 (###) ###-##-##" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Имя</span>
                            <input v-model="userInfo.name" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Email</span>
                            <input v-model="userInfo.email" type="mail" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Отчество</span>
                            <input v-model="userInfo.patronymic" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Пароль</span>
                            <input v-model="userInfo.password" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input">
                            <span>Тип аккаунта</span>
                            <FormSelect initialValue="Ученик" :list="userTypes" v-model="selectedUserType"></FormSelect>
                        </div><div></div>
                        <div class="add-user__form-input" v-if="selectedUserType === 'Ученик' && groupsList && groupsList.length > 0" >
                            <span>Группа</span>
                            <FormSelect initialValue="Выберите группу"
                            :list="groupsList"
                            dropdownType="Object"
                            v-model="userInfo.group"
                            objectDropdownValue="id"></FormSelect>
                        </div>
                        <div class="add-user__form-input" v-if="selectedUserType === 'Преподаватель'">
                            <span>Стаж</span>
                            <input v-model="userInfo.experience" type="text" class="form-control">
                        </div>
                        <div class="parents" v-if="selectedUserType === 'Ученик'">
                            <div class="add-parent__form-input" v-if="parentsNum > 0">
                                <h1>Родитель 1</h1>
                                <div class="input">
                                    <span>Фамилия</span>
                                    <input v-model="parent1.surname" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Имя</span>
                                    <input v-model="parent1.name" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Отчество</span>
                                    <input v-model="parent1.patronymic" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Телефон</span>
                                    <input v-maska data-maska="+7 (###) ###-##-##" v-model="parent1.phone" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Email</span>
                                    <input v-model="parent1.email" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Пароль</span>
                                    <input v-model="parent1.password" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="add-parent__form-input" v-if="parentsNum > 1">
                                <h1>Родитель 2</h1>
                                <div class="input">
                                    <span>Фамилия</span>
                                    <input v-model="parent2.surname" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Имя</span>
                                    <input v-model="parent2.name" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Отчество</span>
                                    <input v-model="parent2.patronymic" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Телефон</span>
                                    <input v-maska data-maska="+7 (###) ###-##-##" v-model="parent2.phone" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Email</span>
                                    <input v-model="parent2.email" type="text" class="form-control">
                                </div>
                                <div class="input">
                                    <span>Пароль</span>
                                    <input v-model="parent2.password" type="text" class="form-control">
                                </div>
                            </div>
                            <MainBtn v-if="selectedUserType === 'Ученик' && parentsNum <=1" className="primary" @click.prevent="parentsNum++">Добавить родителя</MainBtn>
                        </div>
                        
                        <div class="add-user__form-input line">
                            <MainBtn @click.prevent="handeSave()"
                            
                            >Сохранить</MainBtn>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import FormSelect from '../components/UI/FormSelect.vue';
import MainBtn from '../components/UI/MainBtn.vue';

import { useTeacherStore } from '../store/TeacherStore';
import { useStudentsStore } from '../store/StudentsStore';
import { useParentsStore } from '../store/ParentsStore';
import { useUserStore } from '../store/UserStore';
import { useGroupStore } from '../store/GroupStore';

import studentAPI from '../api/student';

import { vMaska } from "maska"

export default {
    components: { FormSelect, MainBtn },
    data() {
        return {
            selectedUserType: 'Ученик',
            userTypes: [
            'Ученик',
            'Преподаватель',
            ],
            parentsNum: 0,
            parent1: {
                name:'',
                surname: '',
                patronymic: '',
                phone: '',
                email: '',
                password: '',
            },
            parent2: {
                name:'',
                surname: '',
                patronymic: '',
                phone: '',
                email: '',
                password: '',
            }
        };
    },
    directives: { maska: vMaska },
    computed: {
        userInfo() {
            return useUserStore().userInfo
        },
        groupsList() {
            return useGroupStore().groupsList
        },
        parent1Ready() {
            if(
                this.parent1.name &&
                this.parent1.surname &&
                this.parent1.patronymic &&
                this.parent1.phone &&
                this.parent1.email &&
                this.parent1.password
            ) {
                return true
            } else {
                return false
            }
        },
        parent2Ready() {
            if(
                this.parent2.name &&
                this.parent2.surname &&
                this.parent2.patronymic &&
                this.parent2.phone &&
                this.parent2.email &&
                this.parent2.password
            ) {
                return true
            } else {
                return false
            }
        },
    },
    methods: {
        async handeSave() {
            switch(this.selectedUserType){
                case 'Ученик':
                    useStudentsStore().createStudent(this.userInfo, this.parent1, this.parent2)
                break;
                case 'Преподаватель':
                useTeacherStore().createTeacher(this.userInfo)
                break;
            }
        }
    },
    created() {
        useGroupStore().getAllGroups()
    }
};
</script>

<style lang="scss">
#addUser
{
    max-height: calc(100vh - 9.6rem);
    overflow-y: scroll;
    padding: 5rem 0;
    .section-label
    {
        margin-bottom: 5rem;
    }
    .parents
    {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column: 2 span;
        column-gap: 8rem;
        padding: 3rem 0;
        border-top: 1px solid #677480;
        button
        {
            align-self: flex-start;
        }
    }
}
.add-user__form
{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 8rem;
    row-gap: 3rem;
}
.add-user__form-input
{
    display: flex;
    column-gap: 4rem;
    align-items: center;
    justify-content: space-between;
    span
    {
        color: #677480;
        font-size: 2rem;
        font-weight: 600;
    }
    input,
    .form-selects
    {
        flex-basis: 40rem;
    }
}
.add-parent__form-input
{
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    .input
    {
        display: flex;
        column-gap: 4rem;
        align-items: center;
        justify-content: space-between;
    }
    h1
    {
        margin-bottom: 3rem;
        font-size: 4rem;
        color: #677480;
    }
    span
    {
        color: #677480;
        font-size: 2rem;
        font-weight: 600;
    }
    input,
    .form-selects
    {
        flex-basis: 40rem;
    }
}
.add-user__form-input.line
{
    grid-column: 2 span;
    justify-content: space-between;
}
</style>