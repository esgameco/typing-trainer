import React from 'react'

type TrainerProps = {
    content: string;
};

const Trainer: React.FC<TrainerProps> = (props: TrainerProps) => {
    return (
        <p>{props.content}</p>
    );
};

export default Trainer