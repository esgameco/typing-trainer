import React from 'react'

type TrainerProps = {
    content: string;
};

type TrainerState = {
    input: string;
};

class Trainer extends React.Component<TrainerProps, TrainerState> {
    // Secondary state type setting
    state: TrainerState = {
        input: ''
    };

    componentDidMount() {
        this.setState({
            input: 'test'
        });
    }

    render() {
        return (
            <h1>{this.state.input} {this.props.content}</h1>
        );
    }
}

export default Trainer