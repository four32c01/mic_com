import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.setActive = this.setActive.bind(this);
    }

    setActive(e){
        e.preventDefault();

        this.setState({
            isActive: true,
        })
    }

    render() {
        const linkClassName = this.state.isActive ? 'is-active' : '';

        return (
            <nav>
                <ul>
                    <li>
                        <Link
                            className={linkClassName}
                            to="#" onClick={this.setActive}>
                            {this.props.linkContent}
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            Link 2
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;