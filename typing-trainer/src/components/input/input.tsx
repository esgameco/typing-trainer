import React from 'react'

import {validateInput} from './validator'

type InputProps = {
    content: string;
    onFinish: Function;
};

type InputState = {
    current: string;
    index: number;
};

class Input extends React.Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);

        // Binds 'this' to the function
        // Required for onInput
        this.inputChanged = this.inputChanged.bind(this);
    }

    state: InputState = {
        current: '',
        index: 0,
    }

    inputChanged(ev: React.FormEvent<HTMLInputElement>) {
        // Changes target type so that value can be accessed
        const target = ev.target as HTMLInputElement;
        const letter = target.value[target.value.length-1];

        // Only change current input if the letter is correct
        if (validateInput(this.props.content, letter, this.state.index)) {
            this.setState({
                current: this.state.current + letter,
                index: this.state.index + 1,
            });
        }
        // Otherwise, 
        else {
            console.log('Incorrect: Expected', this.props.content[this.state.index], 'and got', letter);
        }

        if (this.state.index === this.props.content.length-2) {
            this.props.onFinish();
            this.setState({
                current: '',
                index: 0
            })
        }
    }

    render() {
        return (
            <input type="text" value={this.state.current} onInput={this.inputChanged}></input>
        );
    }
}

export default Input