import React from 'react';
import TextContainer from './TextContainer';

import './TextContainer.css';
import './VideoBackground.css';
const testVideo = require('../test.mp4');

class VideoBackground extends React.Component <{}, {videoLocation: string}> {
    constructor (props: any) {
        super(props);
        this.state = ( {videoLocation: 'http://localhost:8080/video'});
        // this.state = ( {videoLocation: 'http://www.example.com/waterfall-video.mp4'});
    }

    render () {
        return (
            <div>
            <div className="background-video">
            <video id="vid" loop autoPlay muted>
                <source src={testVideo} type="video/mp4" />
                {/* <source src={this.state.videoLocation} type="video/ogg" /> */}
                Your browser does not support the video tag.
            </video>
            </div>
            <div className="content">
                <TextContainer/>
            </div>
            </div>
        )
    }
}

export default VideoBackground;