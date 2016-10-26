import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                {this.props.children ? React.cloneElement(this.props.children, {...this.props}) : this.props.children}
            </div>
        )
    }
}

export default Root;