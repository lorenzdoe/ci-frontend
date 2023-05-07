import Login from './components/Login.vue';
import TodoList from "@/components/TodoList.vue";
import Signup from "@/components/Signup.vue";
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'TodoList',
        component: TodoList,
        path: '/'
    },
    {
        name: 'Signup',
        component: Signup,
        path: '/signup'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to) => {
    console.log("localstorage:", localStorage.getItem('token'));
    if (to.name == 'TodoList' && !localStorage.getItem('token'))
        return { name: 'Login' };
});

export default router;
