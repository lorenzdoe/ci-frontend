<template>
    <!-- To add: login image/logo -->
    <h1 id="inputText"></h1>
    <br><br>
    <div id="div" class="divStyle">
        <input id="input1" type="text" placeholder="username" v-model="username">
        <input id="input2" type="password" placeholder="Enter password" v-model="password">

        <button id="button" @click="signup"></button>
        <br>
        <a href="/login" style="color: antiquewhite; ">Already have an account?</a>
    </div>
</template>

<script>
import { signup } from '@/api';

let group;
export default {
    name: 'SignupComponent',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        async signup() {
            if (this.username == '' || this.password == '') {
                alert('Please enter username and password');
                return;
            }

            let result = await signup(this.username, this.password, group);
            if (result.status == 201) {
                this.$router.push({ name: 'Login' });
            }
            else if (result.status == 400) {
                if (result.data.errors.msg != undefined)
                    alert(result.data.errors);
                else
                    alert(result.data.errors[0].msg + ': ' + result.data.errors[0].param);
            }
            else {
                alert('Something went wrong');
            }
        },
        setGroupA(){
        localStorage.setItem('group', 'A');
        document.getElementById('inputText').textContent = 'Want to be part of our evergrowing family?';
        document.getElementById('input1').className = 'inputStyle';
        document.getElementById('input2').className = 'inputStyle';
        document.getElementById('button').className = 'buttonStyle';
        document.getElementById('button').textContent = 'Join now!';
        },
        setGroupB(){
            localStorage.setItem('group', 'B');
            document.getElementById('inputText').textContent = 'Create account:';
            document.getElementById('button').textContent = 'Sign-up!';
        }
    },
    mounted() {
        if(localStorage.group == undefined) {
            if (Math.random() <= 0.5) {
                group = 'A';
                this.setGroupA();
            }
            else {
                group = 'B';
                this.setGroupB();
            }
        }   
        else {
            group = localStorage.group;
            if (group == 'A') {
                this.setGroupA();
            }
            else {
                this.setGroupB();
            }
        }
    }
};
</script>