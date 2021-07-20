import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';

import Input from '../input';

// type TrainerProps = {
//     content: string;
// };

type TrainerState = {
    book: string[];
};

class Trainer extends React.Component<{}, TrainerState> {
    constructor(props: any) {
        super(props);

        // Bind this for use in input
        this.onFinish = this.onFinish.bind(this);
    }

    state: TrainerState =  {
        book: ['']
    }

    async componentDidMount() {
        axios.get('/book.txt')
            .then((res: AxiosResponse) => {
                this.setState({
                    book: res.data.split('\n')
                })
            }, (error: AxiosError) => {
                console.log(error);
            });
    }

    getRandomPart() {
        const partIndex = Math.floor(Math.random()*this.state.book.length);
        console.log(partIndex)

        return this.state.book[partIndex];
    }

    onFinish() {
        console.log('hello')
    }

    render() {
        const part = this.getRandomPart();

        return <div>
            <p>{part}</p>
            <Input content={part} onFinish={this.onFinish}></Input>
        </div>;
    }
}

export default Trainer