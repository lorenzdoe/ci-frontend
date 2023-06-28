<template>
    <div class="nav">
    <p>To-do List</p>
    <button class="logout-button" @click="handleLogout">Logout</button>
    </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        handleLogout()
        {
            localStorage.removeItem('token');
            this.$router.push({name: 'Login'});
        }
    }
}
</script>

<style scoped>

div{
    display: flex;
    justify-content: space-between;
    
}
.nav{
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

.nav button.logout-button {
  color: rgba(235, 235, 235, 0.64);
  text-decoration: none;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav button.logout-button:hover {
    color: white;
}

</style>
