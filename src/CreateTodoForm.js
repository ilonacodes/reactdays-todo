import React from 'react';
import {Field, Formik} from 'formik';
import {actions} from './actions';
import {connect} from 'react-redux';

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
                    <Field type="text" name="title" />
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
