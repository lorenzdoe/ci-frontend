<template>
    <!-- To add: login image/logo -->
    <h1>Login</h1>
    <div>
        <input type="text" placeholder="username" v-model="username">
        <br>
        <input type="password" placeholder="Enter password" v-model="password">
        <br>
        <button @click="login">Login</button>
    </div>
</template>

<script>
import axios from 'axios'
import {login} from '@/api'
export default{
    name: 'Login',
    data()
    {
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        async login()
        {
            console.log(this.username, this.password);
            let result = await login(this.username, this.password);
            console.log(result);

            if(result.status == 200)
            {
                console.log(result.data.token);
                localStorage.setItem('token', result.data.token);
                this.$router.push({name: 'TodoList'});
            }
            else
            {
                console.log(result.status);
                alert(result.data);
            }
        }
    }
};
</script>