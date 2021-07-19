import React from 'react';

import Trainer from '../trainer'

const App: React.FC = () => {
    return (
        <div className="app">
            <header>
                <h1>Head</h1>
            </header>
            <main>
                <Trainer content="test"></Trainer>
            </main>
        </div>
    );
}

export default App;
