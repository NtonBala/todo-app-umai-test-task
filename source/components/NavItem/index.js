// Core
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NavItem = ({ pathId, children }) => {
    return (
        <Nav.Item>
            <Nav.Link
                as = { Link }
                eventKey = { pathId }
                to = { pathId }>
                { children }
            </Nav.Link>
        </Nav.Item>
    );
};

export default NavItem;
