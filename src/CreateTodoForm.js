import React from 'react';
import {Field, Formik} from 'formik';
import {actions} from './actions';
import {connect} from 'react-redux';
import styled from 'react-emotion';
import {css} from 'emotion';

export const Wrapper = styled('div')`
    background-color: white;
    padding: 15px;
    width: 320px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const inputStyle = css`
    background-color: rgba(255, 0, 0, 0.3);
    border: none;
    color: white;
    box-shadow: none;
    padding: 10px 0;
    width: 100%;
    border-radius: 5px;
    font-size: 22px;
    text-indent: 15px;
    
    &::placeholder {
        color: white;
    }
    
    &:focus {
        outline: 0;
    }
`

const CreateTodoFormComponent = ({createTodo}) => {

    const initialValues = {
        title: ''
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                createTodo(values);
                actions.setSubmitting(false);
                actions.resetForm({title: ''})
            }}
            render={(props) => (
                <form onSubmit={props.handleSubmit}>
                    <Wrapper>
                        <Field type="text"
                               className={inputStyle}
                               placeholder="What needs to be done?"
                               name="title"
                        />
                    </Wrapper>
                </form>
            )}
        />
    );
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: title => dispatch(actions.createTodo(title))
    }
};

export const CreateTodoForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTodoFormComponent);
