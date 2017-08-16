import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,

        // TODO check react slingshot for other tools to use here!
        applyMiddleware(
            thunk,
            reduxImmutableStateInvariant() // only DEV
        )

    );
}
