<template>
    <div class="aside-menu">
        <ul class="links-list" v-if="isAuth">
            <li>
                <router-link to="/">
                    <mdicon name="home" size="40" /> 
                    Главная
                </router-link>
            </li>
            <li>
                <router-link to="/schedule">
                    <mdicon name="calendar-badge" size="40" /> 
                    Расписание
                </router-link>
            </li>
            <li>
                <router-link to="/teachers">
                    <mdicon name="human-male-board" size="40" />
                    Преподаватели
                </router-link>
            </li>
            <li>
                <router-link to="/groups">
                    <mdicon name="account-group" size="40" />
                    Группы
                </router-link>
            </li>
            <li>
                <router-link to="/students">
                    <mdicon name="account-school" size="40" />
                    Обучающиеся
                </router-link> 
            </li>
            <li>
                <router-link to="/parents">
                    <mdicon name="account-tie" size="40" />
                    Родители
                </router-link> 
            </li>
            <li>
                <router-link to="/news">
                    <mdicon name="newspaper-variant-outline" size="40"/>
                    Новости и объявления
                </router-link>
            </li>
        </ul>
        <ul class="links-list" v-else>
            <li>
                <router-link to="/">
                    <mdicon name="home" size="40" /> 
                    Главная
                </router-link>
            </li>
            <li>
                <router-link to="/auth">
                    <mdicon name="location-enter" size="40" /> 
                    Войти
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
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
.aside-menu
{
    height: 100vh;
    padding: 6rem 2.8rem;
    width: 38rem;
    flex-shrink: 0;
    background: #DBE8F0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.11);
}
.links-list
{
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
    li
    {
        color:#677480;
        font-size: 2.2rem;
        font-weight: 400;
        a
        {
            width: fit-content;
            display: flex;
            align-items: center;
            column-gap: 10px;
            text-decoration: none;
            color: inherit;
            &.router-link-active
            {
                color: #424242;
                font-weight: 600;
            }
        }
    }
}
</style>