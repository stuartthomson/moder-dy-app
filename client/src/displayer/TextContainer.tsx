import React from 'react'

class TextContainer extends React.Component <{}, {msg: string}> {

    ws: WebSocket;

    constructor (props: any) {
        super(props);
        this.state = { msg: '' };
        this.ws = new WebSocket('ws://localhost:88');
    }

    componentDidMount() {
        this.ws.onmessage = (evt: MessageEvent) => {
            // console.log(evt);
            this.setState(
                {msg: evt.data}
            );
            
        };
    
        this.ws.onopen = () => {
            console.log('REACT OPENED SOCKET');
        }
    }

    render() {
        return <p>{this.state.msg}</p>;
    }
}

export default TextContainer;