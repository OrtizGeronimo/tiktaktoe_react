import logo from './logo.svg';
import './App.css';
import Casilla from './components/casilla';

function App() {
  
  var casillas = [];
  
  for (let i = 0; i < 9; i++) {
    casillas[i] = <Casilla id={i}/>
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='Container'>
          {casillas}
        </div>
      </header>
    </div>
  );
}

export default App;
