// Core
import React from 'react';
import { string, object } from 'prop-types';
import { connect } from 'formik';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import { unixNow, unixDateCompleted } from '../../../../instruments/helpers';

const CompletedField = ({ name, formik: { setFieldValue, values: { completed }}}) => {
    const _handleChange = () => {
        const newCompleted = !completed;
        const newDateCompleted = newCompleted ? unixNow() : unixDateCompleted();

        setFieldValue(name, newCompleted);
        setFieldValue('dateCompleted', newDateCompleted);
    };

    return (
        <Form.Group
            as = { Row }
            controlId = 'createEdit.completed'>
            <Form.Label column sm = { 3 }>Completed:</Form.Label>
            <Col className = 'pt-1' sm = { 9 }>
                <Form.Check
                    custom
                    checked = { completed }
                    label = ''
                    name = { name }
                    type = 'checkbox'
                    onChange = { _handleChange }
                />
            </Col>
        </Form.Group>
    );
};

CompletedField.propTypes = {
    formik: object.isRequired,
    name:   string.isRequired,
};

export default connect(CompletedField);
