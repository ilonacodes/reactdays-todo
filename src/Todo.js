import React from 'react';
import {css} from 'emotion';

const completed = css`
    text-decoration: line-through;
`;

export const Todo = (props) => {
    return (
        <div className={props.todo.completed ? completed : ''}>
            <span onClick={() => props.completeTodo(props.todo)}>{props.todo.title}</span>
        </div>
    );
};