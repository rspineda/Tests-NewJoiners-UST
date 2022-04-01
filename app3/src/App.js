import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

const  App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Saludo />
    </div>
  );
}

export default App;

//Expected in the screen
//1. Hola PIlar
//2. Demostrar como se pasa una prop de padre a hijo. App --> Saludo 
//3. Un boton en la pantalla (o algo que pasado tiempo) que cuando le de click me diga Hola Boton en lugar de hola Pilar


