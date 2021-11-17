import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './components/cards/MainCard';
import InputField from './components/fields/InputField';

function App() {

  const [displayedName, setDisplayedName] = React.useState('');
   const getPersonName = (enteredPersonName) => {
    setDisplayedName(enteredPersonName);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainCard newName = {displayedName}></MainCard>
        <br></br>
        <InputField getNewPersonName = {getPersonName} >nombre</InputField>
        
      </header>
    </div>
  );
}

export default App;
