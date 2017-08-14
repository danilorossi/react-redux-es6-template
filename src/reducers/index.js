// Root reducer
// for multiple reducers in the same app
import { combineReducers } from 'redux';
import courses from './courseReducers';
import authors from './authorReducers';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, // short hand prop. name
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
