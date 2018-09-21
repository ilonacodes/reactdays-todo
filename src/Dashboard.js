import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';

class DashboardComponent extends React.Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const {todos} = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>{todo.title}</li>
                )}
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: () => dispatch(actions.loadTodos())
    }
};

export const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);