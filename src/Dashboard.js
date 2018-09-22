import React from 'react';
import {connect} from 'react-redux';
import {actions} from './actions';
import {Todo} from './Todo';
import {css} from 'emotion';
import styled from 'react-emotion';

const todoList = css`
    list-style-type: none;
    padding-left: 0;
`;

const Tabs = styled('div')`
    font-size: 16px;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #888888;

    a {
        text-decoration: none;
        color: #888888;
        padding: 0 30px;
    }
    
    @media (max-width: 324px) {
        font-size: 13px;
      
        a {
            padding: 0 25px;
        }
    }
    
`;

const activeTab = css`
    color: #990000 !important;
    font-weight: 500;
`;

class DashboardComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            activeFilter: () => true,
            activeFilterName: 'View All'
        };

        this.viewAll = this.viewAll.bind(this);
        this.viewActive = this.viewActive.bind(this);
        this.viewCompleted = this.viewCompleted.bind(this);
    }

    viewAll() {
        this.setState({
            activeFilter: () => true,
            activeFilterName: 'View All'
        })
    }

    viewActive() {
        this.setState({
            activeFilter: (todo) => !todo.completed,
            activeFilterName: 'Active'
        })
    }

    viewCompleted() {
        this.setState({
            activeFilter: (todo) => todo.completed,
            activeFilterName: 'Completed'
        })
    }

    componentDidMount() {
        this.props.loadTodos();
    }

    render() {
        const {todos, completeTodo, updateTodo, deleteTodo} = this.props;
        return (
            <div>
                <Tabs>
                    <a className={this.state.activeFilterName === 'View All' ? activeTab : ''}
                       href="#"
                       onClick={() => this.viewAll()}
                    >View All </a>
                    <span>/</span>
                    <a className={this.state.activeFilterName === 'Active' ? activeTab : ''}
                       href="#"
                       onClick={() => this.viewActive()}
                    > Active </a>
                    <span>/</span>
                    <a className={this.state.activeFilterName === 'Completed' ? activeTab : ''}
                       href="#"
                       onClick={() => this.viewCompleted()}
                    > Completed</a>
                </Tabs>

                <ul className={todoList}>
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