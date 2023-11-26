<template>
    <section id="addUser">
        <div class="container">
            <div class="section-label">Добавление группы</div>
            <div class="row">
                <div class="col-10">
                    <form class="add-user__form">
                        <div class="add-user__form-input">
                            <span>Название</span>
                            <input v-model="groupInfo.name" type="text" class="form-control">
                        </div>
                        <div class="add-user__form-input" v-if="teacherList && teacherList.length > 0" >
                            <span>Преподаватель</span>
                            <FormSelect initialValue="Выберите преподавателя"
                            :list="teacherList"
                            dropdownType="Object"
                            v-model="groupInfo.teacher"
                            :objectDropdownShow="['name', 'surname']"
                            objectDropdownValue="id"></FormSelect>
                        </div>
                        <div class="add-user__form-input line">
                            <MainBtn @click.prevent="handeSave()">Добавить</MainBtn>
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
import { useGroupStore } from '../store/GroupStore';

export default {
    components: { FormSelect, MainBtn },
    data() {
        return {
        };
    },
    computed: {
        groupInfo() {
            return useGroupStore().creatingGroup
        },
        teacherList() {
            return useTeacherStore().teacherList
        }
    },
    methods: {
        async handeSave() {
            useGroupStore().createGroup(this.groupInfo)
        }
    },
    created() {
        useTeacherStore().getAllTeachers()
    }
};
</script>

<style lang="scss">
#addUser
{
    padding-top: 5rem;
    .section-label
    {
        margin-bottom: 5rem;
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
.add-user__form-input.line
{
    grid-column: 2 span;
    justify-content: space-between;
}
</style>