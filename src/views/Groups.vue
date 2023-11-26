<template >
    <section id="groups">
        <div class="container">
            <div class="section-label">Группы</div>
            <div class="section-head">
                <div class="search-wrap">
                    <mdicon name="magnify" size="30"></mdicon>
                    <input placeholder="Поиск" type="text" class="form-control">
                </div>
                <router-link class="btn btn-primary" to="/addGroup">
                    <mdicon name="plus" size="30"></mdicon>
                    Добавить группу
                </router-link>
            </div>
            <div class="group-list" v-if="groups && groups.length > 0">
                <div class="group-list__item group-list__head">
                    <span>ID</span>
                    <span>Навзание</span>
                    <span>Количество учеников</span>
                </div>
                <div class="group-list__item" v-for="(item) in groups" :key="item.id">
                    <span>{{item.id}}</span>
                    <span>{{item.name}}</span>
                    <span>10</span>
                    <div class="toolbar">
                        <button class="toolbar-item edit">
                            <mdicon name="pencil" size="24"></mdicon>
                        </button>
                        <button class="toolbar-item delete" @click.prevent="deleteGroup(item.id)">
                            <mdicon name="trash-can-outline" size="24"></mdicon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="empty" v-else>
                Вы пока не добавили ни одной группы
            </div>
        </div>
    </section>
</template>
<script>
import MainBtn from '../components/UI/MainBtn.vue';
import { useGroupStore } from '../store/GroupStore';

export default {
    components: { MainBtn },
    computed: {
        groups() {
            return useGroupStore().groupsList;
        }
    },
    methods: {
        async deleteGroup(id) {
            useGroupStore().deleteGroup(id)
        }
    },
    created() {
        useGroupStore().getAllGroups();
    },

}
</script>
<style lang="scss">
    #groups
    {
        padding-top: 5rem;
        .section-label
        {
            margin-bottom: 5rem;
        }
    }
    .group-list
    {
        margin-top: 5rem;
    }
    .group-list__item
    {
        padding: 3rem;
        display: grid;
        grid-template-columns: .3fr 1.2fr 1fr .5fr;
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
    .group-list__head
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