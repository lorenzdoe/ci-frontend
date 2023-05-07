<template>
    <!-- To add: login image/logo -->
    <h1>Create account</h1>
    <div>
        <input type="text" placeholder="username" v-model="username">
        <br>
        <input type="password" placeholder="Enter password" v-model="password">
        <br>
        <button @click="signup">Sign-up</button>
        <br><br>
        <a href="/login" style="color: antiquewhite; ">Already have an account?</a>
    </div>
</template>

<script>
import axios from 'axios'
import {signup} from '@/api'
export default{
    name: 'Signup',
    data()
    {
        return {
            username: '',
            password: ''
        }
    },
    methods:{
        async signup()
        {
            console.log(this.username, this.password);
            let result = await signup(this.username, this.password);
            console.log(result);

            if(result.status == 201)
            {
                this.$router.push({name: 'Login'});
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