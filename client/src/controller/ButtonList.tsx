import React from 'react'
import ControllerButton from './Button';


class ButtonList extends React.Component <{}, {buttons: JSX.Element[]}> {


    lines: string[] = [
        "First Line",
        "Second Line",
        "Third Line"
    ]

    constructor (props: any) {
        super(props);
        this.state= { buttons: [] };
    }

    componentDidMount() {
    


        const myButtons = this.lines.map (
            (line) => <ControllerButton line={line}/>
        );
        this.setState({
            buttons: myButtons
        });
    }

    render() {
        console.log(this.state.buttons);
        return this.state.buttons.map(
            button => (<li>{button}</li>)
        );
    }
}

export default ButtonList;