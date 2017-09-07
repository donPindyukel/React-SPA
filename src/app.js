import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Modal } from './components';
import { DevTools } from './utils';
import { TopAlert } from './components/top-alert';

export default class App extends Component {
    
    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';
    
    render() {
        return (
            <div className='container-fluid'>
                <TopAlert />
                <Modal />
                <Header />
                { this.props.children }
                { NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}

