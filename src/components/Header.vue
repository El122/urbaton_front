<template>
    <header>
        <button class="dropdown" @click="toggleMenu">
            <mdicon name="account" color="#FFFFFF" size="50"></mdicon>
            <div class="dropdown-list" v-if="showMenu">
                <ul v-if="isAuth">
                    <li ><router-link to="/account">Личный кабинет</router-link></li>
                    <li ><button @click.prevent="logout()">Выход</button></li>
                </ul>
                <ul v-else>
                    <li><router-link to="/auth">Войти</router-link></li>
                </ul>
            </div>
        </button>

    </header>
    <div class="header-line"></div>
</template>
<script>
import { useUserStore } from '../store/UserStore';
export default {
    data() {
        return {
            showMenu: false,
        }
    },
    computed: {
        isAuth() {
            if(localStorage.getItem('userToken')) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        toggleMenu()
        {
            this.showMenu = !this.showMenu
        },
        logout() {
            useUserStore().logout()
        }
    }
}
</script>
<style lang="scss">
    header
    {
        padding: 1.5rem 3rem;
        height: 8rem;
        width: 100%;
        background: #2085C5;
        display: flex;
        justify-content: flex-end;
        .mdi.mdi-account
        {
            svg
            {
                fill: #FFF;
            }

        }
    }
    .header-line
    {
        position: relative;
        height: 1.6rem;
        width: 100%;
        background: #7DCEFC;
        &::before
        {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 40%;
            z-index: 10;
            background: #FF9615;
        }
        &::after
        {
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 20%;
            z-index: 20;
            background: #F10152;
        }
    }
    .dropdown
    {
        position: relative;
    }
    .dropdown-list
    {
        padding: 1rem;
        position: absolute;
        top: 100%;
        right: 0;
        min-width: 15rem;
        background: #FFF;
        z-index: 1000;
        border-radius: 8px;
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.059);
        ul
        {
            list-style: none;
            padding: 0;
            margin: 0;
            li
            {
                width: 100%;
                text-align: right;
                font-size: 1.6rem;
                white-space: nowrap;
                color: #424242;
                padding: 1rem;
                transition: .2s;
                border-radius: 8px;
                a
                {
                    text-decoration: none;
                    color: inherit;
                }
                &:hover
                {
                    background-color: #d1d1d1ab;
                }
            }
        }
    }
</style>