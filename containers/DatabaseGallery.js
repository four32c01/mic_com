import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class DatabaseGallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="database-gallery">

            </div>
        );
    }
}



export default connect(null, null)(DatabaseGallery);