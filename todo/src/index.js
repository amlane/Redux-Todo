import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { setToken } from './token';

import { reducer } from './reducers';

import './index.css';
import App from './App';


const store = createStore(reducer, applyMiddleware(setToken));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);


