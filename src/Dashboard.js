import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';
import {Todo} from './Todo';

class DashboardComponent extends React.Component {

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const {todos, completeTodo, updateTodo, deleteTodo} = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        <Todo todo={todo}
                              completeTodo={completeTodo}
                              updateTodo={updateTodo}
                              deleteTodo={deleteTodo}
                        />
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
        completeTodo: todo => dispatch(actions.completeTodo(todo)),
        updateTodo: todo => dispatch(actions.updateTodo(todo)),
        deleteTodo: todo => dispatch(actions.deleteTodo(todo))
    }
};

export const Dashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardComponent);