/*eslint-disable import/default*/
import 'babel-polyfill'; // Babel can't transpile all ES6 features (or choose single polyfills for the specific features you use)!
import React from 'react';
import { render } from 'react-dom'; // In React 1.4 react-dom was split off from React
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'; // browserHistory for clean URLs, no hash, and browser history features
import routes from './routes';

import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

import './styles/styles.css'; // Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); // we could pass initial state here for server side / local store etc

// Alt: inject js object injected by server into html
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')

);
