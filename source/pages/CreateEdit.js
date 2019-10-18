// Core
import React from 'react';
import Tab from 'react-bootstrap/Tab';

// Components
import { Catcher, Spinner } from '../components';

// Instruments
import { book } from '../navigation/book';
import { useQuery } from '../instruments';

const CreateEdit = () => {
    const id = useQuery().get('id');

    const headingText = id ? `Edit Todo:` : 'Create Todo:';

    return (
        <Catcher>
            <Spinner />

            <Tab.Pane eventKey = { book.createEdit }>
                <h2>{ headingText }</h2>
            </Tab.Pane>
        </Catcher>
    );
};

export default CreateEdit;
