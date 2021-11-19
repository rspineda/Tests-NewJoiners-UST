import axios from 'axios';

export const getUsersTaskData = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
}

//otra funcion ....../1

//ojo, no me vale mas de 1 función