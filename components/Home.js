import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as  actionCreators from '../actions/users';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUsers();
    }


    render() {
        return (
            <div className="p-upload p-upload--success b-grey">
                <h1>Home...some users :)</h1>
                <ul>
                    {this.props.users && this.props.users.map((user) => {
                        return <li>{user.name.title} {user.name.first} {user.name.last}</li>                
                    })}
                </ul>
            </div>
        );
    }
}
Home.propTypes = {
    getUsers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
   return {
      users: state.users.users,
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(actionCreators.getUserRequest())
                .then((response) => {
                    if (!response.error) {
                        dispatch(actionCreators.getUserSuccess(response.payload));
                    } else {
                        dispatch(actionCreators.getUserFail(response.payload));
                    }
                });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
