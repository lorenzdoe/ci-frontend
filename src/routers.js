import LoginComponent from './components/LoginComponent.vue';
import TodoList from '@/components/TodoList.vue';
import SignupComponent from '@/components/SignupComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'Login',
        component: LoginComponent,
        path: '/login'
    },
    {
        name: 'TodoList',
        component: TodoList,
        path: '/'
    },
    {
        name: 'Signup',
        component: SignupComponent,
        path: '/signup'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    if (to.name === 'TodoList' && !localStorage.getItem('token')) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router;
