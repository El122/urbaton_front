import { createRouter, createWebHistory  } from 'vue-router'

import Home from './views/Home.vue'
import Auth from './views/Auth.vue'
import Teachers from './views/Teachers.vue'
import Schedule from './views/Schedule.vue'
import Students from './views/Students.vue'
import Parents from './views/Parents.vue'
import News from './views/News.vue'
import Groups from './views/Groups.vue'
import AddUser from './views/AddUser.vue'
import AddGroup from './views/AddGroup.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/auth',
        component: Auth,
    },
    {
        path: '/teachers',
        component: Teachers,
    },
    {
        path: '/students',
        component: Students,
    },
    {
        path: '/schedule',
        component: Schedule,
    },
    {
        path: '/news',
        component: News,
    },
    {
        path: '/parents',
        component: Parents,
    },
    {
        path: '/groups',
        component: Groups,
    },
    {
        path: '/addUser',
        component: AddUser,
    },
    {
        path: '/addGroup',
        component: AddGroup,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
    }
})

export default router
