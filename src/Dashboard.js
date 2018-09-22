import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';
import {Todo} from './Todo';

class DashboardComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            activeFilter: () => true
        };

        this.viewAll = this.viewAll.bind(this);
        this.viewActive = this.viewActive.bind(this);
        this.viewCompleted = this.viewCompleted.bind(this);
    }

    viewAll() {
        this.setState({
            activeFilter: () => true
        })
    }

    viewActive() {
        this.setState({
            activeFilter: (todo) => !todo.completed
        })
    }

    viewCompleted() {
        this.setState({
            activeFilter: (todo) => todo.completed
        })
    }

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const {todos, completeTodo, updateTodo, deleteTodo} = this.props;
        return (
            <div>
                <a href="#" onClick={() => this.viewAll()}>View All</a>
                <a href="#" onClick={() => this.viewActive()}>Active</a>
                <a href="#" onClick={() => this.viewCompleted()}>Completed</a>

                <ul>
                    {todos.filter(this.state.activeFilter).map(todo =>
                        <li key={todo.id}>
                            <Todo todo={todo}
                                  completeTodo={completeTodo}
                                  updateTodo={updateTodo}
                                  deleteTodo={deleteTodo}
                            />
                        </li>
                    )}
                </ul>
            </div>
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