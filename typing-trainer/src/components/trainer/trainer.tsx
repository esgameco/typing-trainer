import React from 'react'

import Input from '../input'

type TrainerProps = {
    content: string;
};

class Trainer extends React.Component<TrainerProps> {
    render() {
        return (
            <Input content={this.props.content}></Input>
        );
    }
}

export default Trainer