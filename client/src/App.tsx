import React from 'react';
import './App.css';
import TextContainer from './TextContainer';

const App: React.FC = () => {
    // fetch ('https://8080-dd65346a-508b-4d7d-844d-08899a696944.ws-eu0.gitpod.io/', {mode: 'no-cors'}).then( results => {
    //     console.log(results);
    // });
  return (
    <div className="App">
      < TextContainer />
    </div>
  );
}


export default App;
