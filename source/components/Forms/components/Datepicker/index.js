// Core
import React from 'react';
import { string, object } from 'prop-types';
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';
import { connect } from 'formik';

// Instruments
import 'react-datepicker/dist/react-datepicker.css';
import './customStyles';

const Datepicker = ({ name, formik: { setFieldValue, values: { dueDate }}}) => {
    const dueDateObj = new Date(dueDate * 1000);

    const handleChange = (dateObj) => {
        setFieldValue(name, dateObj.getTime() / 1000);
    };

    return (
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
    );
};

Datepicker.propTypes = {
    formik: object.isRequired,
    name:   string.isRequired,
};

export default connect(Datepicker);
