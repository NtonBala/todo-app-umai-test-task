// Core
import React from 'react';
import { string, object } from 'prop-types';
import DatePicker from 'react-datepicker';
import { connect } from 'formik';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Instruments
import 'react-datepicker/dist/react-datepicker.css';
import './customStyles';

const DatepickerField = ({ name, formik: { setFieldValue, values: { dueDate }}}) => {
    const dueDateObj = new Date(dueDate * 1000);

    const handleChange = (dateObj) => {
        setFieldValue(name, dateObj.getTime() / 1000);
    };

    return (
        <Form.Group
            as = { Row }
            controlId = 'createEdit.dueDate'>
            <Form.Label column sm = { 3 }>Due:</Form.Label>
            <Col className = 'pt-1' sm = { 9 }>
                <DatePicker
                    showTimeSelect
                    customInput = { <Form.Control /> }
                    dateFormat = 'MMMM d, yyyy h:mm aa'
                    selected = { dueDateObj }
                    timeCaption = 'Time'
                    timeFormat = 'HH:mm'
                    timeIntervals = { 15 }
                    onChange = { handleChange }
                />
            </Col>
        </Form.Group>
    );
};

DatepickerField.propTypes = {
    formik: object.isRequired,
    name:   string.isRequired,
};

export default connect(DatepickerField);
