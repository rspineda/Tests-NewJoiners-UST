import axios from 'axios';

export const getUsersTaskData = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
}


    export const getOneUsersTaskData  = async (props) =>{
    
        return await axios.get(`https://jsonplaceholder.typicode.com/todos/${props}`);
    }
