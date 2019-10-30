// Core
import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';

// Instruments
import Styles from './styles.m.css';

const Spinner = ({ isFetching }) => {
    return isFetching ? <div className = { Styles.spinner } /> : null;
};

Spinner.propTypes = {
    isFetching: bool.isRequired,
};

const mapState = (state) => {
    return {
        isFetching: state.ui.get('isFetching'),
    };
};

export default connect(
    mapState
)(Spinner);
