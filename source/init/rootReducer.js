// Core
import { combineReducers } from 'redux';

// Reducers
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
    ui,
});
