import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/cards/MainCard';
import InputField from './components/fields/InputField';
import TaskInputField from './components/fields/TaskInputField';
import { getUsersTaskData,getOneUsersTaskData} from './functions/data';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UsersListCard from './components/cards/UsersListCard';
import UserListTaskCard from './components/cards/UserListTaskCard';

function App() {
  const names = [
    {Name:'Santiago Laberinto',id:1},
    {Name:'Gustavo Dazarin',id:2},
    {Name:'Paul Paupin',id:3},
    {Name:'Ronald Piripin',id:4},
    {Name:'Felipe Martelin',id:5},
    {Name:'Joselito Menganito',id:6},
    {Name:'Jose Francisco PalosColegas',id:7},
    {Name:'Eduardo Poziacaso',id:8},
    {Name:'Hari babulino',id:9},
    {Name:'Hassan Sullilla',id:10},
  ];

  const [displayedName, setDisplayedName] = useState('');
  const [usersTasks, setUsersTasks] = useState([]);
  const [oneUserTask, setOneUserTask] = useState([]);
  const [displayedTask, setDisplayedTask] = useState('');
  const [identificationName,setIdentificationName] = useState('');

 const findId = (id) => {
  for(var i=0; i<9;i++){ 
    if(id===names[i].Name){
      setIdentificationName(parseInt(names[i].id));
    }
  }    
  return -1;
}
 
 const getPersonName = (enteredPersonName) => {
    setDisplayedName(enteredPersonName);
    findId(enteredPersonName);
  }
  const getPersonTask = (enteredPersonTask) => {
    setDisplayedTask(parseInt(enteredPersonTask));
  }
  
  const searchForTask = () => {
    if (identificationName===1)
    {
      return parseInt(displayedTask);
    }else {
      return ((parseInt(identificationName)*20-20)+parseInt(displayedTask));
    }
  }
  
  
  const loadUsersTasks = () => {
    getUsersTaskData()
    .then((res) => {
      console.log(res);
      setUsersTasks(res.data);
    });
  }

    const loadOneUsersTasks = () => {
     getOneUsersTaskData(searchForTask())
      .then((res2) => {
        console.log(res2);
        setOneUserTask(res2.data);
     });
    }

  useEffect(() => {
    loadOneUsersTasks();
  },[loadOneUsersTasks]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainCard oneUserTask={oneUserTask}></MainCard>
        <br></br>
        <InputField getNewPersonName = {getPersonName} 
        displayedName={displayedName} 
        setDisplayedName={setDisplayedName}
        >nombre</InputField>
        <TaskInputField
        displayedTask={displayedTask}
        setDisplayedTask={setDisplayedTask}
        getNewPersonTask={getPersonTask}></TaskInputField>
      </header>
      <body>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={loadUsersTasks}>Users Tasks</Button>
      </Stack>
      <UsersListCard userTask = {usersTasks} />
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={loadOneUsersTasks}> One User Task</Button>
      </Stack>
      <UserListTaskCard oneUserTask = {oneUserTask} />
      </body>
    </div>
  );
}

export default App;
