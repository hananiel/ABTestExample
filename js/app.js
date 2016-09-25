import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getAllProducts } from './actions';
import App from './components/App.jsx';
import krogerUsageMetrics from 'kroger-usage-metrics';

const middleware = process.env.NODE_ENV === 'production' ?
    [thunk] :
    [thunk, logger()];
let um = krogerUsageMetrics({
       adobeAnalyticsConfig: {
         accountName: 'krgrkrogerdev',
         enableDevTools: true
       },
       transform: {
         scenarios: []
        },
       clickstreamConfig: {
         url: 'http://localhost:8889/clickstream',
         maxSize: 10,
         enableDevTools: true
       }
     });


let store =  createStore(
    reducer,
    {},
    compose(applyMiddleware(thunk,um),
    window.devToolsExtension ? window.devToolsExtension():f=>f)
  );

store.dispatch(getAllProducts());

ReactDOM.render(
    <Provider store={store}>
         <App />
    </Provider>,
    document.getElementById('redux-app')
);
