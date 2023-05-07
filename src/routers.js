import Login from './components/Login.vue';
import TodoList from "@/components/TodoList.vue";
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
