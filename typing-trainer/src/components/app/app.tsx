import React from 'react';

import Trainer from '../trainer'

const App: React.FC = () => {
    return (
        <div className="app">
            <header>
                <h1>Head</h1>
            </header>
            <main>
                <Trainer content="test1"></Trainer>
                <Trainer content="test2"></Trainer>
                <Trainer content="test3"></Trainer>
            </main>
        </div>
    );
}

export default App;
