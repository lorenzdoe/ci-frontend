import axios from 'axios';

function getBackendPath() {
    switch(process.env.NODE_ENV) {
        case 'production':                     // atuomatically set in nginx docker image
            return 'http://3.230.232.40:3000'; // elastic ip of backend
        default:
            return 'http://localhost:3000';
    }
}

const backendPath = getBackendPath();

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
};

const createTodo = async (name, date) => {
    let res = await axios.post(
        backendPath + '/todos',
        {
            'name': name,
            'date': date
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
        backendPath + `/todos/${id}/done`,
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
        backendPath + `/todos/${id}/done`,
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
        let res = await axios.post( backendPath + '/sessions', {
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
        let res = await axios.post( backendPath + '/users', {
            username: username,
            password: password
        });
        return res;
    } catch (e) {
        return e.response;
    } 
};

const isFeatureEnabled = async (name) => {
    try {
        let res = await axios.get( backendPath + '/features/' + name);
        return await res.data.enabled;
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
    signup,
    isFeatureEnabled
};