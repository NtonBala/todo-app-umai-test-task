// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Reducers
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    ui,
    router,
});
