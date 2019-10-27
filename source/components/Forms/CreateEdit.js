// Core
import React, { useEffect, useRef } from 'react';
import { bool, func } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import { createEdit } from '../../instruments/forms/shapes';

// Components
import { Datepicker } from './components';

const useLocationChange = (form) => {
    const location = useLocation();

    useEffect(() => {
        form.current.resetForm();
    }, [location]);
};

const CreateEditForm = ({ isEditing, isFetching, createTodoAsync, editTodoAsync }) => {
    const formEl = useRef(null);

    useLocationChange(formEl);

    const _submitCreateEditForm = (values) => {
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
            render = { (props) => {
                console.log('-> Formik props:', props);

                const { isValid, touched, errors } = props;

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
                                            <Form.Control as = 'textarea' { ...field } />
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
    isEditing:       false,
    isFetching:      false,
};

CreateEditForm.propTypes = {
    createTodoAsync: func.isRequired,
    editTodoAsync:   func.isRequired,
    isEditing:       bool.isRequired,
    isFetching:      bool.isRequired,
};

export default CreateEditForm;
