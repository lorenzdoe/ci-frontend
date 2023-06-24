import axios from 'axios';

const readTodos = async () => {
  let res = await axios.get(
        'http://localhost:3000/todos',
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

  return res.data;
};

const createTodo = async (name) => {
    let res = await axios.post(
        'http://localhost:3000/todos',
        {
            'name': name
        },
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

    return res.data;
};

const doneTodo = async (id) => {
    let res = await axios.put(
        `http://localhost:3000/todos/${id}/done`,
        null,
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

    return res.data;
};

const undoneTodo = async (id) => {
    let res = await axios.delete(
        `http://localhost:3000/todos/${id}/done`,
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

    return res.data;
};

const login = async (username, password) => {
    try {
        let res = await axios.post('http://localhost:3000/sessions', {
            username: username,
            password: password
        });
        return res;
    } catch (e) {
        return e.response;
    }   
};

const signup = async (username, password) => {
    try {    
        let res = await axios.post('http://localhost:3000/users', {
            username: username,
            password: password
        });
        return res;
    } catch (e) {
        return e.response;
    } 
};


export {
    readTodos,
    createTodo,
    doneTodo,
    undoneTodo,
    login,
    signup
};