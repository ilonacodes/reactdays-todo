import React from 'react';
import {css} from 'emotion';
import {Field, Formik} from 'formik';

const completed = css`
    text-decoration: line-through;
`;

export class Todo extends React.Component {

    constructor() {
        super();

        this.state = {
            editing: false
        };

        this.startEditing = this.startEditing.bind(this);
        this.finishEditing = this.finishEditing.bind(this);
    }

    startEditing() {
        this.setState({
            editing: true
        })
    }

    finishEditing() {
        this.setState({
            editing: false
        })
    }

    render() {
        if (this.state.editing) {
            return (
                <Formik
                    initialValues={{title: this.props.todo.title}}
                    onSubmit={(values, actions) => {
                        this.props.updateTodo({
                            ...values,
                            id: this.props.todo.id
                        });
                        actions.setSubmitting(false);
                        this.finishEditing();
                    }}
                    render={(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Field type="text" name="title" />
                            <button type="button" onClick={() => this.finishEditing()}>Cancel</button>
                        </form>
                    )}
                />
            );
        } else {
            return (
                <div className={this.props.todo.completed ? completed : ''}>
                    <span onClick={() => this.props.completeTodo(this.props.todo)}>{this.props.todo.title}</span>
                    <button type="button" onClick={() => this.startEditing()}>Edit</button>
                </div>
            );
        }

    }
};