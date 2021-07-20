import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import Input from '../input';

// type TrainerProps = {
//     content: string;
// };

type TrainerState = {
    parts: string[];
    // TODO: Move parts into app and only have currentPart, call function passed from app to get new part
    currentPart: string;
};

class Trainer extends React.Component<{}, TrainerState> {
    constructor(props: any) {
        super(props);

        // Bind this for use in input
        this.onFinish = this.onFinish.bind(this);
    }

    state: TrainerState =  {
        parts: [''],
        currentPart: ''
    }

    async componentDidMount() {
        axios.get('/book.txt')
            .then((res: AxiosResponse) => {
                this.setState({
                    parts: res.data.split('\n'),
                })
                this.newPart();
            }, (error: AxiosError) => {
                console.log(error);
            });
    }

    getRandomPart() {
        const partIndex = Math.floor(Math.random()*this.state.parts.length);

        return this.state.parts[partIndex];
    }

    newPart() {
        this.setState({
            currentPart: this.getRandomPart()
        });
    }

    onFinish() {
        this.newPart();
    }

    render() {
        return <div>
            <p>{this.state.currentPart}</p>
            <Input content={this.state.currentPart} onFinish={this.onFinish}></Input>
        </div>;
    }
}

export default Trainer