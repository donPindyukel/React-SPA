import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from './components';
import { DevTools } from './utils';

export default class App extends Component {
    
    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';
    
    render() {
        return (
            <div className='container-fluid'>
                <Modal />
                <Header />
                { this.props.children }
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}

