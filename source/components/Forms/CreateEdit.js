// Core
import React from 'react';
import { bool, func } from 'prop-types';
import { Formik, Field } from 'formik';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import { createEdit } from '../../instruments/forms/shapes';

const CreateEditForm = ({ isEditing, isFetching, createTodoAsync, editTodoAsync }) => {
    const _submitCreateEditForm = (values) => {
        console.log('-> values:', values);
        const { text } = values;

        console.log('-> todo text:', text);

        if (isEditing) {
            editTodoAsync(text);
        } else {
            createTodoAsync(text);
        }
    };

    return (
        <Formik
            initialValues = { createEdit.shape }
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
                                                label = ''
                                                type = 'checkbox'
                                            />
                                        </Col>
                                    </Form.Group>
                                );
                            } }
                        />

                        <Button disabled = { isFetching } type = 'submit'>
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
