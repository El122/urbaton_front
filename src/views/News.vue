<template >
    <section id="news">
        <div class="container">
            <div class="section-label">Новости и объявления</div>
            <div class="section-head">
                <!-- <MainBtn className="primary">
                    <mdicon name="plus" size="30"></mdicon>
                    Добавить новость
                </MainBtn> -->
            </div>
            <div class="empty">
                Раздел в разработке
            </div>
        </div>
    </section>
</template>
<script>
import MainBtn from '../components/UI/MainBtn.vue';
import { useNewsStore } from '../store/NewsStore';
export default {
    components: { MainBtn },
    computed: {
        news() {
            return useNewsStore().teacherList
        }
    },
    created() {
        useNewsStore().getAllNews()
    }
}
</script>
<style lang="scss">
#news
{
    padding-top: 5rem;
    .section-label
    {
        margin-bottom: 5rem;
    }
}
</style>