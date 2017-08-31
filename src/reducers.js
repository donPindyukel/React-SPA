import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home';
import { ListReducer } from './pages/list';


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer
});
