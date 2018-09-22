import React from 'react';
import {css} from 'emotion';
import {Field, Formik} from 'formik';
import {inputStyle, Wrapper} from './CreateTodoForm';
import styled from 'react-emotion';

const completed = css`
    text-decoration: line-through;
`;

const todoStyle = css`
   margin-top: 10px;
   cursor: pointer;
`;

const FlexWrapper = styled('div')`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 18px;
    
    span {
        line-height: 1.5;
    }
`;

const editButton = css`
    font-size: 16px;
    background-color: #ffc107;
    color: white;
    border: 1px solid #ffc107;
    border-radius: 5px;
    padding: 4px 10px;
    margin-right: 10px;
    cursor: pointer;    
`;

const deleteButton = css`
    ${editButton};
    background-color: #dc3545;
    border-color: #dc3545;
    margin-right: 0;
`;

const cancelButton = css`
    ${editButton};
    background-color: #17a2b8;
    border-color: #17a2b8;
    margin-right: 0;
`;

const checkbox = css`
  &::before {
    content: '\00a0';
    font-size: 16px;
    display: inline-block;
    width: 18px; height: 18px;
    border: 2px solid #444;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
    margin-right: 5px;
    line-height: 1.4;
 } 
`;

const checked = css`
  &::before {
      content: '✔';
      color: #09ad7e;
  }
`;

const editInputStyle = css`
  ${inputStyle}
  font-size: 18px;
  margin-right: 10px;
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
        });
    }

    finishEditing() {
        this.setState({
            editing: false
        });
    }

    render() {
        if (this.state.editing) {
            return (
                <Formik
                    initialValues={{title: this.props.todo.title}}
                    onSubmit={(values, actions) => {
                        this.props.updateTodo({
                            ...this.props.todo,
                            ...values,
                            completed: false
                        });
                        actions.setSubmitting(false);
                        this.finishEditing();
                    }}
                    render={(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <Wrapper className={todoStyle}>
                                <FlexWrapper>
                                    <Field className={editInputStyle} type="text" name="title"/>
                                    <button className={cancelButton} type="button" onClick={() => this.finishEditing()}>Cancel</button>
                                </FlexWrapper>
                            </Wrapper>
                        </form>
                    )}
                />
            );
        } else {
            return (
                <Wrapper className={todoStyle}>
                    <FlexWrapper>
                            <span onClick={() => this.props.completeTodo(this.props.todo)}>
                                <span className={`${checkbox} ${this.props.todo.completed ? checked : ''}`}/>
                                <span
                                    className={this.props.todo.completed ? completed : ''}>{this.props.todo.title}</span>
                            </span>
                        <div>
                            <button className={editButton} onClick={() => this.startEditing()}>Edit</button>
                            <button className={deleteButton} onClick={() => this.props.deleteTodo(this.props.todo)}>Delete</button>
                        </div>
                    </FlexWrapper>
                </Wrapper>
            );
        }

    }
};