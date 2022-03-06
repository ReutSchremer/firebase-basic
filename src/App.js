import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { createNewId, getCapitalCities, login, updateDC } from './firebase/createUser';
import { update } from 'firebase/database';
import { initDB } from './firebase/initCities';

function App() {
  useEffect(() => {
    // createNewId()
    // updateDC()
    // login("reut@hilma.tech", "123123"); //worng password
    // getCapitalCities()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => initDB()}>Init DB</button>
      </header>

    </div>
  );
}

export default App;
