// Core
import React from 'react';
import { string, number, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Instruments
import { formatUnixDate } from '../../instruments';

const Todo = ({ id, text, dueDate, dateCompleted, completed, removed }) => {
    const date = completed ? dateCompleted : dueDate;

    return (
        <Card bg = 'primary' className = 'my-2' text = 'white'>
            <Card.Body>
                <Card.Text>{ text }</Card.Text>

                {removed ? (
                    <Button className = 'float-right' variant = 'success'>Restore</Button>
                ) : (
                    <>
                        <Button className = 'float-right' variant = 'danger'>Delete</Button>
                        <Button
                            as = { Link }
                            className = 'float-right mx-2'
                            to = { `/create-edit?id=${id}` }
                            variant = 'warning'>
                            Edit
                        </Button>
                    </>
                )}

            </Card.Body>

            <Card.Footer className = 'text-right'>
                {completed ? 'completed on ' : 'due '}
                <span className = 'font-italic'>{ formatUnixDate(date) }</span>
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
