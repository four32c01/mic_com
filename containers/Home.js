import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as  actionCreators from '../actions/users';
import Navigation from '../components/Navigation';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUsers();
        console.log("HOME WILL MOUNT");
    }

    componentDidMount(){
        console.log("HOME DID MOUNT");
    }

    componentWillUpdate(){
        console.log("HOME WILL UPDATE");
    }

    componentWillUnmount(){
        console.log("HOME UNMOUNT");
    }


    render() {
        return (
            <div className="p-upload p-upload--success b-grey">
                <Navigation
                    linkContent="LinkInNav"
                />
                <h1>Home...some users :) :)</h1>
                <ul>
                    {this.props.users && this.props.users.map((user) => {
                        return <li>{user.name.title} {user.name.first} {user.name.last}</li>                
                    })}
                    <Link to="/db">
                        Linkic na bazy
                    </Link>
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
