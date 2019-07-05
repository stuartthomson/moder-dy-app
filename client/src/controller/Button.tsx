import React from 'react'

type ButtonProps = {line: string,};

class ControllerButton extends React.Component <ButtonProps> {

    constructor (props: ButtonProps) {
        super(props);
    }

    // For some reason need an arrow function here, for binding purposes?
    // https://stackoverflow.com/questions/32732989/getting-typeerror-this-props-is-undefined-on-reactjs
    sendLine = () => {
        console.log('attempting to post');
        // this.props.ws.send(this.props.line);
        fetch('http://localhost:8080/line', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({line: this.props.line})
        })
    }
    render() {
        return <button onClick={this.sendLine}>
                    {this.props.line}
                </button>;
    }
}

export default ControllerButton;
