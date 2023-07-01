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
import {signup} from '@/api';
import {
    makeAdapter,
    makeExperiment,
    experimentVariants,
} from "@/analytics/ab-testing";
import AlephBet from "alephbet";

let goal;
export default{
    name: 'SignupComponent',
    data()
    {
        return {
            username: '',
            password: ''
        };
    },
    methods:{
        async signup()
        {
            let group = JSON.parse(localStorage.getItem('alephbet'));
            let result = await signup(this.username, this.password, group['group:variant']);

            if(result.status == 201)
            {
                this.$router.push({name: 'Login'});
                goal.complete();
             this.counter++;
            }
            else if(result.status == 400)
            {
                if(result.data.errors.msg == undefined)
                    alert(result.data.errors);
                else
                    alert(result.data.errors[0].msg + ' ' + result.data.errors[0].param);
            }
            else
            {
                alert('Something went wrong');
            }
        }
    },
    mounted() {
            const name = "group";
            const variants = experimentVariants[name];
            const adapter = makeAdapter();
            const experiment = makeExperiment(name, variants, adapter);
            goal = new AlephBet.Goal("button clicked", {unique: false});
            experiment.add_goal(goal);
        },
};
</script>