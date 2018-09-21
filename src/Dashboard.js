import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';
import {Todo} from './Todo';

class DashboardComponent extends React.Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const {todos, completeTodo} = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <Todo todo={todo} completeTodo={completeTodo}/>
                    </li>
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
        loadTodos: () => dispatch(actions.loadTodos()),
        completeTodo: todo => dispatch(actions.completeTodo(todo))
    }
};

export const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);