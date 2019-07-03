import React from 'react';
import './Displayer.css';
import TextContainer from './TextContainer';
import VideoBackground from './VideoBackground';

const Displayer: React.FC = () => {
  return (
    <div className="App">
    < VideoBackground />
      < TextContainer />
    </div>
  );
}


export default Displayer;
