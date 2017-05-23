import React, {Component} from 'react';



import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            answers: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            },
            submitted: false
        }

        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }

    handleNameSubmit(event) {
        event.preventDefault();
        console.log(this.refs.Name.value);
        var name = this.refs.Name.value;

        this.setState({
            name: name
        }, function() {
            console.log(this.state.name);
        });
    }

    handleQuestionSubmit(event) {
        event.preventDefault();
        console.log("Question Submitted");
    }

    handleQuestionChange(event) {

        console.log(event.target.value);

        var answers = this.state.answers;
        var userSelection = event.target.value;

        if(event.target.name === 'q1'){
            answers.q1 = userSelection;
        }
        else if(event.target.name === 'q2'){
            answers.q2 = userSelection;
        }
        else if(event.target.name === 'q3'){
            answers.q3 = userSelection;
        }
        else if(event.target.name === 'q4'){
            answers.q4 = userSelection;
        }

        this.setState({
            answers: answers
        }, function(){
            console.log(answers);
        });
    }

    render() {
        var user;
        var questions;
        if (this.state.name && this.state.submitted === false) {
            user = <div>
                <h2>Welcome {this.state.name}</h2>
            </div>;
            questions = <div className="container">
                <form onSubmit={this.handleQuestionSubmit.bind(this)}>
                    <h3>New Survey</h3>
                    <h5>What is your favorite operating system?</h5>

                    <p>
                        <input className="with-gap" type="radio" name="q1" value="Windows" onChange={this.handleQuestionChange}/>
                        <label>Windows</label>
                        </p>
                    <p>
                        <input className="with-gap" type="radio" name="q1" value="Mac" onChange={this.handleQuestionChange}/>
                        <label>Mac</label>
                        </p>
                    <p>
                        <input className="with-gap" type="radio" name="q1" value="Ubuntu" onChange={this.handleQuestionChange}/>
                        <label>Ubuntu</label>
                        </p>
                    <p>
                        <input className="with-gap" type="radio" name="q1" value="Other" onChange={this.handleQuestionChange}/>
                        <label>Other</label>
                        </p>
                    <button>Submit</button>
                </form>
            </div>;

        } else if (!this.state.name && this.state.submitted === false) {
            user = <div>
                <h2>Please enter your name before beginning the survery</h2>
                <form onSubmit={this.handleNameSubmit.bind(this)}>
                    <h3>Register User</h3>
                    <input type="text" placeholder="Enter Name" ref="Name"/>
                    <button>Submit</button>
                </form>
            </div>;
            questions = '';
        } else if (this.state.submitted === true) {}

        return (
            <div className="App">
                <div className="row">
                    <nav className="navbar-nav">
                        <div className="navbar">
                            <a href="#" className="brand-logo">Simple Survey</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <a href="#">Sass</a>
                                </li>
                                <li>
                                    <a href="#">Components</a>
                                </li>
                                <li>
                                    <a href="#">React</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>

                <div className="container">
                    <h2>{user}</h2>
                    <div>{questions}</div>
                </div>
            </div>
        );
    }
}

export default App;
