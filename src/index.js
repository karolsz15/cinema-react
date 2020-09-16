import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import contactReducer from './store/contactReducer';
import bookingReducer from './store/bookingReducer';
import dataReducer from './store/dataReducer';

const rootReducer = combineReducers({
    contactReducer,
    bookingReducer,
    dataReducer
})

const store = createStore(rootReducer);

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();