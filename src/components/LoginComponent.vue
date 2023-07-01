<template>
    <!-- To add: login image/logo -->
    <h1>Login</h1>
    <div>
        <input type="text" placeholder="username" v-model="username">
        <br>
        <input type="password" placeholder="Enter password" v-model="password">
        <br>
        <button @click="login">Login</button>
        <br><br>
        <a href="/signup" style="color: antiquewhite; ">Create an account</a>
    </div>
</template>

<script>
import {login} from '@/api';
export default{
    name: 'LoginComponent',
    data()
    {
        return {
            username: '',
            password: ''
        };
    },
    methods:{
        async login()
        {
            if(this.username == '' || this.password == '')
            {
                alert('Please enter username and password');
                return;
            }
            let result = await login(this.username, this.password);

            if(result.status == 200)
            {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('username', this.username);
                this.$router.push({name: 'TodoList'});
            }
            
            else
            {
                alert(result.data.errors);
            }
        }
    },
};
</script>