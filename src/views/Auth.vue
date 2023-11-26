<template>
    <section id="auth">
        <div class="container">
            <div class="row">
                <div class="col-5 mx-auto">
                    <form action="" class="auth-form">
                        <div class="auth-form__label">Авторизация</div>
                        <div class="auth-form__text">Чтобы войти в систему введите логин и пароль</div>
                        <div class="auth-form__inputs">
                            <input class="form-control" type="email" placeholder="Email" v-model="email">
                            <input class="form-control" type="password" placeholder="Пароль" v-model="password">
                        </div>
                        <MainBtn className="primary" type="submit" @click.prevent="authUser">Войти</MainBtn>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
</template>
<script>
import MainBtn from '../components/UI/MainBtn.vue';
import { useUserStore } from '../store/UserStore'
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        authUser() {
            useUserStore().authUser(this.email, this.password);
        }
    },
    components: { MainBtn }
}
</script>
<style lang="scss" scoped>
#auth
{
    background: #e4e4e4;
    display: flex;
    align-items: center;
    justify-content: center;
}
.auth-form
{
    padding: 8rem 8rem 22rem 8rem;
    background-color: #FFFFFF;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    &__label
    {
        margin-bottom: 3rem;
        color: #424242;
        font-size: 3rem;
        font-weight: 700;
    }
    &__text
    {
        margin-bottom: 5rem;
        color: #677480;
        font-size: 1.8rem;
        font-weight: 600;
    }
    &__inputs
    {
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        row-gap: 3rem;
    }
}
</style>