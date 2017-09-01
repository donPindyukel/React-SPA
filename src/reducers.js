import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { HomeReducer } from './pages/home';
import { ListReducer } from './pages/list';
import { ModalReducer } from './components/modal';


export default combineReducers({
    routing: routerReducer,
    ...HomeReducer,
    ...ListReducer,
    ...ModalReducer
});
