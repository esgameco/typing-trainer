class Trainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: {
                quote: '',
                author: ''
            },
            errors: [],
            input: '',
            index: 0,
        };
    }

    // Calls when component mounts, is essentially the constructor
    async componentDidMount() {
        await this.newQuote();
    }

    // Called when input box changes
    changeInput(ev) {
        const letter = ev.target.value[ev.target.value.length-1];
        const correct = this.state.content.quote[this.state.index];
        if (letter == correct)
            this.setState({
                ...this.state,
                input: this.state.input + letter,
                index: this.state.index + 1
            });
        else
            this.setState({
                ...this.state,
                errors: [
                    ...this.state.errors, 
                    {
                        index: this.state.index,
                        letter,
                        correct
                    }
                ]
            });
    }

    // Sets current quote to a random quote
    async newQuote() {
        this.setState({
            ...this.state, 
            content: this.quotes[Math.floor(Math.random()*this.quotes.length)]
        });
    }

    // Move functionality into smaller components
    render() {
        return (
            <div className="trainer">
                <p>{this.state.content.quote}</p>
                <textarea 
                    type="text" 
                    value={this.state.input} 
                    onChange={this.changeInput.bind(this)}
                    rows="4"
                    cols="100"></textarea>
                <p>Most recent errors: </p>
                <ul className="errors">
                    {/* TODO: Slice last 5 elements */}
                    {this.state.errors.slice().map(({index, letter, correct}, i) => {
                        return <p>{i+1}: Error on char {index} with letter {letter}, should be {correct}</p>
                    })}
                </ul>
                {/* TODO: Cap at 0% */}
                <p>You have a {(1-((this.state.errors.length)/(this.state.index+1)))*100}% accuracy</p>
            </div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async getQuotes() {
        const url = 'https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        const res = await axios.get(url);
        return res.data.quotes;
    }

    render() {
        return (
            <div className="app">
                <h1>Typing Trainer</h1>
                <Trainer quotes={this.getQuotes()} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));