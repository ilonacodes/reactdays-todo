import React, {Component} from 'react';
import './App.css';
import {CreateTodoForm} from './CreateTodoForm';
import {Dashboard} from './Dashboard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CreateTodoForm/>
                <Dashboard />
            </div>
        );
    }
}

export default App;
