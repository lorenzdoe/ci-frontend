import axios from "axios";

function getBackendPath() {
    switch(process.env.NODE_ENV) {
        case 'production':
            return 'http://172.31.31.87:3000';
        default:
            return 'http://localhost:3000';
    }
}

const backendPath = getBackendPath();

console.log(backendPath);

const readTodos = async () => {
  let res = await axios.get(
        backendPath + '/todos',
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

  return res.data;
}

const createTodo = async (name) => {
    let res = await axios.post(
        backendPath + '/todos',
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
}

const doneTodo = async (id) => {
    let res = await axios.put(
        backendPath + `/todos/${id}/done`,
        null,
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

    return res.data;
}

const undoneTodo = async (id) => {
    let res = await axios.delete(
        backendPath + `/todos/${id}/done`,
        {
            headers: {
                Authorization: 'Baerer '+localStorage.getItem('token')
            }
        }
    );

    return res.data;
}

const login = async (username, password) => {
    try {
        let res = await axios.post( backendPath + '/sessions', {
            username: username,
            password: password
        });
        return res;
    } catch (e) {
        console.log(e.response);
        return e.response;
    }   
}

const signup = async (username, password) => {
    try {    
        let res = await axios.post( backendPath + '/users', {
            username: username,
            password: password
        })
        return res;
    } catch (e) {
        console.log(e.response);
        return e.response;
    } 
}


export {
    readTodos,
    createTodo,
    doneTodo,
    undoneTodo,
    login,
    signup
}