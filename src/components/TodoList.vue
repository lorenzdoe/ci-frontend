<template>
<Header />
<h1 class= "title">do something</h1>
  <ul>
    <li>
      <TodoInput @new-todo="post" />
    </li>
    <li v-for="(todo, i) in todos">
      <Todo :todo="todo" @done="done" @undone="undone" />
    </li>
  </ul>
  <!-- <button @click="handleLogout">Logout</button> -->
</template>

<script>
import Header from "@/components/Header.vue";
import Todo from "@/components/Todo.vue";
import TodoInput from "@/components/TodoInput.vue";
import { createTodo, doneTodo, readTodos, undoneTodo } from "@/api";


export default {
  name: "TodoList",
  components: { Header, TodoInput, Todo },
  data() {
    return {
      todos: []
    }
  },
  methods: {

    async getAll() {
      this.todos = await readTodos();
    },
    async post(name) {
      if(name != null){
        var todo = await createTodo(name);
        this.todos.push(todo);
      }
    },
    async done(id) {
      var todo = await doneTodo(id);
      this.update(id, todo);
    },
    async undone(id) {
      var todo = await undoneTodo(id);
      this.update(id, todo);
    },
    update(id, todo) {
      this.todos.forEach((value, i) => {
        if (value.id === id) {
          this.todos[i] = todo;
        }
      });
    }
  },
  created() {
    this.getAll();
  }
}
</script>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 5%;
}
ul {
  list-style-type: none;
}
</style>