<template >
    <section id="students">
        <div class="container">
            <div class="section-label">Обучающиеся</div>
            <div class="section-head">
                <div class="search-wrap">
                    <mdicon name="magnify" size="30"></mdicon>
                    <input placeholder="Поиск" type="text" class="form-control">
                </div>
                <router-link class="btn btn-primary" to="/addUser">
                    <mdicon name="plus" size="30"></mdicon>
                    Добавить ученика
                </router-link>
            </div>
            <div class="students-list" v-if="students && students.length > 0">
                <div class="students-list__item students-list__head">
                    <span>ФИО</span>
                    <span>Группа</span>
                    <span>Инструмент</span>
                    <span>Программа</span>
                    <span>Контакты</span>
                </div>
                <div class="students-list__item" v-for="(item) in students" :key="item.id">
                    <span>{{ item.name + " " + item.surname }}</span>
                    <span>4 класс</span>
                    <span>Фортепиано</span>
                    <span>Продвинутая</span>
                    <div class="contacts">
                        <span v-if="item.email">{{ item.email }}</span>
                        <span v-if="item.phone">{{ item.phone }}</span>
                    </div>
                    <div class="toolbar">
                        <button type="button" class="toolbar-item edit" >
                            <mdicon name="pencil" size="24"></mdicon>
                        </button>
                        <button type="button" class="toolbar-item delete" @click.prevent="deleteUser(item.id)">
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
import { useStudentsStore } from '../store/StudentsStore';
export default {
    components: { MainBtn },
    computed: {
        students() {
            return useStudentsStore().studentsList
        }
    },
    methods: {
        async deleteUser(id) {
            useStudentsStore().deleteStudent(id)
        }
    },
    created() {
        useStudentsStore().getAllStudents()
    },

}
</script>
<style lang="scss">
#students
{
    max-height: calc(100vh - 9.6rem);
    overflow-y: scroll;
    padding: 5rem 0;
    .section-label
    {
        margin-bottom: 5rem;
    }
}
.students-list
{
    margin-top: 5rem;
}
.students-list__item
{
    padding: 3rem;
    display: grid;
    grid-template-columns: 1.2fr .8fr 1fr 1fr 1fr .5fr;
    align-items: center;
    column-gap: 1rem;
    border-top: 1px solid #677480;
    .contacts
    {
        display: flex;
        flex-direction: column;
        row-gap: .4rem;
    }
    span
    {
        color: #4F4F4F;
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 1.25em;
    }
}
.students-list__head
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