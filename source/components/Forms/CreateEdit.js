// Core
import React, { useEffect, useRef } from 'react';
import { bool, func, shape } from 'prop-types';
import { Formik, Field } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import { createEdit } from '../../instruments/forms/shapes';

// Fields
import { DatepickerField } from './components';
import { CompletedField } from './components';

// Actions
import { todosActions } from '../../bus/todos/actions';

const useLocationChange = (form, hasLocationChanged) => {
    useEffect(() => {
        form.current.resetForm();
    }, [hasLocationChanged]);
};

const CreateEditForm = ({ actions, isEditing, isFetching }) => {
    const formEl = useRef(null);

    useLocationChange(formEl, isEditing);

    const _submitCreateEditForm = (values) => {
        const { text } = values;

        if (isEditing) {
            actions.editTodoAsync(text);
        } else {
            actions.createTodoAsync({ ...values });
        }
    };

    return (
        <Formik
            initialValues = { createEdit.shape }
            ref = { formEl }
            render = { (props) => {
                console.log('-> formik props:', props);
                const buttonMessage = isFetching
                    ? 'Submitting...'
                    : `${isEditing ? 'Edit Todo' : 'Create Todo'}`;

                return (
                    <Form onSubmit = { props.handleSubmit }>
                        <Field
                            name = 'text'
                            render = { ({ field }) => {
                                return (
                                    <Form.Group
                                        as = { Row }
                                        controlId = 'createEdit.text'>
                                        <Form.Label column sm = { 3 }>Task:</Form.Label>
                                        <Col sm = { 9 }>
                                            <Form.Control
                                                as = 'textarea'
                                                isInvalid = { Boolean(props.errors.text) }
                                                { ...field }
                                            />

                                            <Form.Control.Feedback type = 'invalid'>
                                                { props.errors.text }
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                );
                            } }
                        />

                        <DatepickerField name = 'dueDate' />

                        <CompletedField name = 'completed' />

                        <Button
                            className = 'float-right'
                            disabled = { isFetching }
                            type = 'submit'>
                            {buttonMessage}
                        </Button>
                    </Form>
                );
            } }
            validationSchema = { createEdit.schema }
            onSubmit = { _submitCreateEditForm }
        />
    );
};

CreateEditForm.propTypes = {
    actions: shape({
        createTodoAsync: func.isRequired,
        editTodoAsync:   func.isRequired,
    }).isRequired,
    isEditing:  bool.isRequired,
    isFetching: bool.isRequired,
};

const mapState = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
    };
};

const mapDispatch = (dispatch) => {
    return {
        actions: bindActionCreators({
            createTodoAsync: todosActions.createTodoAsync,
        }, dispatch),
    };
};

export default connect(
    mapState,
    mapDispatch
)(CreateEditForm);
