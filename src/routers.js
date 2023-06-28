import LoginComponent from './components/LoginComponent.vue';
import TodoList from '@/components/TodoList.vue';
import TodoListSorted from '@/components/TodoListSorted.vue';
import SignupComponent from '@/components/SignupComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { isFeatureEnabled } from './api';

async function readFeatureToggle() {
    if (await isFeatureEnabled('sortTodos')) {
        return TodoListSorted;
    } else {
        return TodoList;
    }
}

const routes = [
    {
        name: 'Login',
        component: LoginComponent,
        path: '/login'
    },
    {
        name: 'TodoList',
        component: async () => await readFeatureToggle(),
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
