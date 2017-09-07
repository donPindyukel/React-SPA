import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

class TopAlert  extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired
    };

    removeMargin() {
        document.querySelector('#app').classList.remove('m-t-50');
    }

    addMargin() {
        document.querySelector('#app').classList.add('m-t-50');
    }

    render() {
        const { name, email } = this.props.user;
        if (isEmpty(name) || isEmpty(email)) {
            this.removeMargin();
            return null;
        }

        this.addMargin();

        return (
            <div className='alert alert-success b-alert'>
                <span className='name'>{ name }</span>
                <span className='email'>{ email }</span>
        
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(TopAlert);