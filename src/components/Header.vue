<template>
    <div class="nav">
    <div>
        <p>To-do List</p>
        <button v-if="(isAdmin())" class="feature-toggle" @click="toggleFeature">toggle feature</button>
    </div>
    <button class="logout-button" @click="handleLogout">Logout</button>
    </div>
</template>

<script>
import { toggleFeature } from "@/api";
export default {
    name: 'Header',
    methods: {
        handleLogout()
        {
            localStorage.removeItem('token');
            localStorage.removeItem('username');
            this.$router.push({name: 'Login'});
        },
        async toggleFeature() {
            await toggleFeature('sortTodos');
            window.location.reload();
        }, 
        isAdmin() {
            // very simple check and can be changed by users
            // but server checks also for permissions when toggling feature
            return localStorage.getItem('username') == 'admin';
        }
    }
}
</script>

<style scoped>

div {
    display: flex;
}

.nav{
    display: flex;
    justify-content: space-between;
    background-color: #333;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 10px;
}

.nav a{
    color: rgba(235, 235, 235, 0.64);
    text-decoration: none;
    font-size: 18px;
}

.nav p{
    left: 3%;
    color: rgba(235, 235, 235, 0.64);
    font-size: 22px;
}

.nav button {
    color: rgba(235, 235, 235, 0.64);
    text-decoration: none;
    font-size: 18px;
    background: none;
    border: none;
    cursor: pointer;
}

.nav button.feature-toggle {
    border: 1px solid rgba(235, 235, 235, 0.64);;
    border-radius: 5px;
    padding: 5px;
    margin-left: 30px;
}

.nav button:hover {
    color: white;
}
</style>
