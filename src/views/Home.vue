<template lang="">
    <div class="container">
        <div class="welcome">
            Добро пожаловать!
            <router-link v-if="!isAuth" to="/auth" class="btn btn-primary">Войти</router-link>
        </div>
    </div>
</template>
<script>
import MainBtn from '../components/UI/MainBtn.vue';
export default {
    components: {
        MainBtn
    },
    computed: {
        isAuth() {
            if(localStorage.getItem('userToken')) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>
<style lang="scss">
    .welcome
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 3rem;
        height: 100%;
        width: 100%;
        font-size: 7.2rem;
        font-weight: 700;
        color: #677480;
    }
</style>