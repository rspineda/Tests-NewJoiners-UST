import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/cards/MainCard';
import InputField from './components/fields/InputField';

function App() {

  const [newState, setNewState] = React.useState('Eduardo');
   const getPersonName = (enteredPersonName) => {
    const personName = enteredPersonName;
    console.log(personName);
    setNewState(enteredPersonName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainCard newName = {newState}></MainCard>
        <br></br>
        <InputField getNewPersonName = {getPersonName} >nombre</InputField>
        
      </header>
    </div>
  );
}

export default App;
