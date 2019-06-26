import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
    fetch ('https://8080-dd65346a-508b-4d7d-844d-08899a696944.ws-eu0.gitpod.io/', {mode: 'no-cors'}).then( results => {
        console.log(results);
    });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Name is Stuart.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
