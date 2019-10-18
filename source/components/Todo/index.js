// Core
import React from 'react';
import { string, number, bool } from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Instruments
import { formatDate } from '../../instruments';

const Todo = ({ text, dueDate, dateCompleted, completed, removed }) => {
    const dateMessage = completed ? 'completed on' : 'due';

    const date = completed ? formatDate(dateCompleted) : formatDate(dueDate);

    const buttonText = removed ? 'Restore' : 'Edit';

    return (
        <Card bg = 'primary' className = 'my-2' text = 'white'>
            <Card.Body>
                <Card.Text>{ text }</Card.Text>

                {!removed && (
                    <Button className = 'float-right' variant = 'danger'>Delete</Button>
                )}

                <Button className = 'float-right mx-2' variant = { removed ? 'success' : 'warning' }>
                    { buttonText }
                </Button>
            </Card.Body>
            <Card.Footer className = 'text-right'>
                {dateMessage} <span className = 'font-italic'>{ date }</span>
            </Card.Footer>
        </Card>
    );
};

Todo.propTypes = {
    completed:     bool.isRequired,
    id:            string.isRequired,
    text:          string.isRequired,
    dateCompleted: number,
    dueDate:       number,
    removed:       bool,
};

export default Todo;
