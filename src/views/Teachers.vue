<template >
    <section id="teachers">
        <div class="container">
            <div class="section-label">Преподаватели</div>
            <div class="section-head">
                <div class="search-wrap">
                    <mdicon name="magnify" size="30"></mdicon>
                    <input placeholder="Поиск" type="text" class="form-control">
                </div>
                <router-link class="btn btn-primary" to="/addUser">
                    <mdicon name="plus" size="30"></mdicon>
                    Добавить преподавателя
                </router-link>
            </div>
            <div class="teacher-list" v-if="teachers && teachers.length > 0">
                <div class="teacher-list__item teacher-list__head">
                    <span>ФИО</span>
                    <span>Стаж</span>
                    <span>Предмет</span>
                    <span>Роль</span>
                </div>
                <div class="teacher-list__item" v-for="(item) in teachers" :key="item.id">
                    <span>{{item.name + ' ' + item.surname + ' ' + item.patronymic}}</span>
                    <span>2 года</span>
                    <span>Фортепиано</span>
                    <span>Руководитель коллектива</span>
                    <div class="toolbar">
                        <button class="toolbar-item edit">
                            <mdicon name="pencil" size="24"></mdicon>
                        </button>
                        <button class="toolbar-item delete"  @click.prevent="deleteUser(item.id)">
                            <mdicon name="trash-can-outline" size="24"></mdicon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="empty" v-else>
                Вы пока не добавили ни одного студента
            </div>
        </div>
    </section>
</template>
<script>
import MainBtn from '../components/UI/MainBtn.vue';
import { useTeacherStore } from '../store/TeacherStore';
export default {
    components: { MainBtn },
    computed: {
        teachers() {
            return useTeacherStore().teacherList;
        }
    },
    methods: {
        async deleteUser(id) {
            useTeacherStore().deleteTeacher(id)
        }
    },
    created() {
        useTeacherStore().getAllTeachers();
    },
    
}
</script>
<style lang="scss">
#teachers
{
    max-height: calc(100vh - 9.6rem);
    overflow-y: scroll;
    padding: 5rem 0;
    .section-label
    {
        margin-bottom: 5rem;
    }
}
.teacher-list
{
    margin-top: 5rem;
}
.teacher-list__item
{
    padding: 3rem;
    display: grid;
    grid-template-columns: 1.2fr .8fr 1fr 1.2fr .5fr;
    align-items: center;
    column-gap: 1rem;
    border-top: 1px solid #677480;
    span
    {
        color: #4F4F4F;
        font-size: 1.6rem;
        font-weight: 500;
    }
}
.teacher-list__head
{
    padding: 0 3rem 1.8rem 3rem;
    border-top: 0;
    span
    {
        font-size: 2.2rem;
        font-weight: 600;
    }
}
</style>