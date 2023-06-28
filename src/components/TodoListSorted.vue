<template>
  <Header />
  <h1 class="title">get things done</h1>
  <ul>
  <div class="input-field">
    <li>
      <TodoInput @new-todo="post" />
    </li>
    <li>
      <input type="date" v-model="date" class="date-input" />
    </li>
  </div>
  <template v-for="(groupedTodos, date) in sortedTodos" :key="date">
    <li class="date-heading">{{ date }}</li>
    <li v-for="(todo, i) in groupedTodos" :key="i">
      <Todo :todo="todo" @done="done" @undone="undone" />
    </li>
  </template>
</ul>


</template>

<script>
import Header from "@/components/Header.vue";
import Todo from "@/components/Todo.vue";
import TodoInput from "@/components/TodoInput.vue";
import { createTodo, doneTodo, readTodos, undoneTodo } from "@/api";


export default {
  name: "TodoListSorted",
  components: { Header, TodoInput, Todo },
  data() {
    const today = new Date().toISOString().split('T')[0];
    return {
      todos: [],
      date: today
    };
  },
  computed: {
    sortedTodos() {
      const sorted = this.todos.sort((a, b) => {
      // Sort by undone todos first
      if (a.done && !b.done) return 1;
      if (!a.done && b.done) return -1;
      // Sort todos without date first
      if (a.date != null && b.date == null) return 1;
      if (a.date == null && b.date != null) return -1;
      // Sort by date for todos with the same done status
      return new Date(a.date) - new Date(b.date);
      });

      const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      const grouped = {}
      sorted.forEach(todo => {
        if(todo.date != null) {
          let date = new Date(todo.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

          // move undone todos from the past in today
          date = date < today && !todo.done ? today : date;
          if (!grouped[date]) {
            grouped[date] = [];
          }
          grouped[date].push(todo);
        }
        else {
          if (!grouped["without date"]) {
            grouped["without date"] = [];
          }
          grouped["without date"].push(todo);
        }
      });
      return grouped;
    }
  },
  methods: {

    async getAll() {
      this.todos = await readTodos();
    },
    async post(name) {
      if(name != null){
        var todo = await createTodo(name, this.date);
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
ul {
  list-style-type: none;
}
.title {
  text-align: center;
  margin-bottom: 5%;
}

.input-field {
  border-radius: 20px;
  background-color: #333;
  padding-top: 6px;
  padding-bottom: 6px;
  border: 1px solid grey;

}

.date-heading {
  line-height: 1.6;
  font-size: 18px;
  color: var(--color-text);
  width: 400px;
  padding: 10px 20px;
  margin: 10px;

  display: flex;
  flex-wrap: nowrap;

  transition: background-color 0.2s;
}

.date-input {
  line-height: 1.6;
  font-size: 15px;
  color: var(--color-text);
  width: 400px;
  padding: 10px 20px;
  margin: 10px;

  border: 1px solid grey;
  border-radius: 20px;

  display: flex;
  flex-wrap: nowrap;

  background-color: #252525;
  transition: background-color 0.2s;
}
</style>