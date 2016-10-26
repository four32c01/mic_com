import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Database extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        console.log("DB WILL MOUNT");
    }

    componentDidMount(){
        console.log("DB DID MOUNT");
    }

    componentWillUpdate(){
        console.log("DB WILL UPDATE");
    }

    componentWillUnmount(){
        console.log("DB UNMOUNT");
    }
    
    render() {
        return (
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at dicta illum inventore iusto laboriosam necessitatibus officiis praesentium quia, repellendus reprehenderit sint veritatis voluptatibus! Aliquid eveniet facere neque nostrum unde.</p>
            </div>
        );
    }
}

export default Database;