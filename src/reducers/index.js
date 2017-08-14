// Root reducer
// for multiple reducers in the same app
import { combineReducers } from 'redux';
import courses from './courseReducers';

const rootReducer = combineReducers({
    courses // short hand prop. name
});

export default rootReducer;