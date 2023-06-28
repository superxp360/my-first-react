import Greeting from './components/Greeting';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Im getting hungry!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (at Boca Code)
        </a>
      </header>
    </div>
  );
}

export default App;
