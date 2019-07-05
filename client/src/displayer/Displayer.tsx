import React from 'react';
import './Displayer.css';
import './TextContainer.css';
import TextContainer from './TextContainer';
import VideoBackground from './VideoBackground';

const Displayer: React.FC = () => {
  return (
    <div className="App">
      <div>
        < VideoBackground />
      </div>
      <div className="content">
        < TextContainer />
      </div>
    </div>
  );
}


export default Displayer;
