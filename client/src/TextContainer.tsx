import React from 'react'

class TextContainer extends React.Component <{}, {msg: string}> {

    ws: WebSocket;

    constructor (props: any) {
        super(props);
        this.state = { msg: '' };
        this.ws = new WebSocket('ws://localhost:88');
        this.ws.onmessage = (evt: MessageEvent) => {

            this.setState(
                {msg: evt.data}
            );
            
        };
    
        this.ws.onopen = () => {
            console.log('REACT OPENED SOCKET');
            this.ws.send('testing, something else');
        }


    }

    render() {
        return <p>{this.state.msg}</p>;
    }
}

export default TextContainer;