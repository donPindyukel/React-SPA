import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export default class ListItem extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired
    };
    
    render() {
        return (
            <li>
                <Link to={ `/list/${ this.props.id }` }>Item { this.props.id }</Link>
            </li>
        );
    }
}
