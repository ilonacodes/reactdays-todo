import React, {Component} from 'react';
import './App.css';
import {CreateTodoForm} from './CreateTodoForm';
import {Dashboard} from './Dashboard';
import styled from 'react-emotion';

export const Container = styled('div')`
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

class App extends Component {
    render() {
        return (
            <Container className="App">
                <CreateTodoForm/>
                <Dashboard />
            </Container>
        );
    }
}

export default App;
