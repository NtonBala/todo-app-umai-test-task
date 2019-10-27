// Core
import React, { useEffect, useRef } from 'react';
import { bool, func } from 'prop-types';
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import { createEdit } from '../../instruments/forms/shapes';

// Components
import { Datepicker } from './components';

const useLocationChange = (form, hasLocationChanged) => {
    useEffect(() => {
        form.current.resetForm();
    }, [hasLocationChanged]);
};

const CreateEditForm = ({ isEditing, isFetching, createTodoAsync, editTodoAsync }) => {
    const formEl = useRef(null);

    useLocationChange(formEl, isEditing);

    const _submitCreateEditForm = (values) => {
        console.log('-> SUBMIT FORM');
        const { text } = values;

        if (isEditing) {
            editTodoAsync(text);
        } else {
            createTodoAsync(text);
        }
    };

    return (
        <Formik
            initialValues = { createEdit.shape }
            ref = { formEl }
            render = { ({ errors, handleSubmit }) => {
                const buttonMessage = isFetching
                    ? 'Submitting...'
                    : `${isEditing ? 'Edit Todo' : 'Create Todo'}`;

                return (
                    <Form onSubmit = { handleSubmit }>
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
                                                isInvalid = { Boolean(errors.text) }
                                                { ...field }
                                            />

                                            <Form.Control.Feedback type = 'invalid'>
                                                { errors.text }
                                            </Form.Control.Feedback>
                                        </Col>
                                    </Form.Group>
                                );
                            } }
                        />

                        <Form.Group
                            as = { Row }
                            controlId = 'createEdit.dueDate'>
                            <Form.Label column sm = { 3 }>Due:</Form.Label>
                            <Col className = 'pt-1' sm = { 9 }>
                                <Datepicker name = 'dueDate' />
                            </Col>
                        </Form.Group>

                        <Field
                            name = 'completed'
                            render = { ({ field }) => {
                                return (
                                    <Form.Group
                                        as = { Row }
                                        controlId = 'createEdit.completed'>
                                        <Form.Label column sm = { 3 }>Completed:</Form.Label>
                                        <Col className = 'pt-1' sm = { 9 }>
                                            <Form.Check
                                                { ...field }
                                                custom
                                                checked = { field.value }
                                                label = ''
                                                type = 'checkbox'
                                            />
                                        </Col>
                                    </Form.Group>
                                );
                            } }
                        />

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

CreateEditForm.defaultProps = {
    createTodoAsync: () => {},
    editTodoAsync:   () => {},
    isFetching:      false,
};

CreateEditForm.propTypes = {
    createTodoAsync: func.isRequired,
    editTodoAsync:   func.isRequired,
    isEditing:       bool.isRequired,
    isFetching:      bool.isRequired,
};

export default CreateEditForm;
