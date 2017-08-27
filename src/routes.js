import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { HomePage, HomeRoutes } from './pages/home';
import { ContactRoutes } from './pages/contact';
import ErrorPage from './pages/error/index';


export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />
        
        { HomeRoutes }
        { ContactRoutes }

        <Route path='*' component={ ErrorPage } />
    </Route>
);
