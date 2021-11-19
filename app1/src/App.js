import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/cards/MainCard';
import InputField from './components/fields/InputField';
import { getUsersTaskData } from './functions/data';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App() {
  const [displayedName, setDisplayedName] = useState('');
  const [usersTasks, setUsersTasks] = useState([]);
  
  const getPersonName = (enteredPersonName) => {
    setDisplayedName(enteredPersonName);
  }

  const loadUsersTasks = () => {
    getUsersTaskData()
    .then((res) => {
      console.log(res);
      setUsersTasks(res.data);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{displayedName}</div>
        <MainCard displayedName={displayedName}></MainCard>
        <br></br>
        <InputField getNewPersonName = {getPersonName} 
        displayedName={displayedName} 
        setDisplayedName={setDisplayedName}>nombre</InputField>
        
      </header>
      <body>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={loadUsersTasks}>Users Tasks</Button>
      </Stack>
        <div>
          {JSON.stringify(usersTasks)}
        </div>
      </body>
    </div>
  );
}

export default App;
