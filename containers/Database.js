import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navigation from '../components/Navigation';
import SearchFilters from './SearchFilters';
import DatabaseGallery from './DatabaseGallery';


class Database extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page page--grey">
                <Navigation />
                <div className="database">
                    <SearchFilters />
                    <DatabaseGallery />
                </div>
            </div>
        );
    }
}

export default Database;