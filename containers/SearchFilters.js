import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class SearchFilters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-filters">

            </div>
        );
    }
}



export default connect(null, null)(SearchFilters);