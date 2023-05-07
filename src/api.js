import axios from "axios";

const readTodos = async () => {
  let res = await axios.get(
        'http://localhost:3000/todos',
        {
            headers: {
                Authorization: 'Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcGFzY2hsdW1wZiIsImlhdCI6MTY4MzQ2NzM0NywiZXhwIjoxNjgzNDcwOTQ3fQ.fOFr1KRFrpsvSiLzoh4lbA3xf7-fHrN0aywhOITsPVQ'
            }
        }
    );

  return res.data;
}

const createTodo = async (name) => {
    let res = await axios.post(
        'http://localhost:3000/todos',
        {
            'name': name
        },
        {
            headers: {
                Authorization: 'Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcGFzY2hsdW1wZiIsImlhdCI6MTY4MzQ2NzM0NywiZXhwIjoxNjgzNDcwOTQ3fQ.fOFr1KRFrpsvSiLzoh4lbA3xf7-fHrN0aywhOITsPVQ'
            }
        }
    );

    return res.data;
}

const doneTodo = async (id) => {
    let res = await axios.put(
        `http://localhost:3000/todos/${id}/done`,
        null,
        {
            headers: {
                Authorization: 'Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcGFzY2hsdW1wZiIsImlhdCI6MTY4MzQ2NzM0NywiZXhwIjoxNjgzNDcwOTQ3fQ.fOFr1KRFrpsvSiLzoh4lbA3xf7-fHrN0aywhOITsPVQ'
            }
        }
    );

    return res.data;
}

const undoneTodo = async (id) => {
    let res = await axios.delete(
        `http://localhost:3000/todos/${id}/done`,
        {
            headers: {
                Authorization: 'Baerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBhcGFzY2hsdW1wZiIsImlhdCI6MTY4MzQ2NzM0NywiZXhwIjoxNjgzNDcwOTQ3fQ.fOFr1KRFrpsvSiLzoh4lbA3xf7-fHrN0aywhOITsPVQ'
            }
        }
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