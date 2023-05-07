import axios from "axios";

const readTodos = async () => {
  let res = await axios.get('http://localhost:3000/todos');

  return res.data;
}

const createTodo = async (name) => {
    let res = await axios.post(
        'http://localhost:3000/todos',
        {
            'name': name
        }
    );

    return res.data;
}

const doneTodo = async (id) => {
    let res = await axios.put(
        `http://localhost:3000/todos/${id}/done`
    );

    return res.data;
}

const undoneTodo = async (id) => {
    let res = await axios.delete(
        `http://localhost:3000/todos/${id}/done`
    );

    return res.data;
}

const login = async (username, password) => {
    let res = await axios.post('http://localhost:3000/sessions', {
                username: username,
                password: password
            })
            console.log(res.status);
            return res;
}

export {
    readTodos,
    createTodo,
    doneTodo,
    undoneTodo,
    login
}