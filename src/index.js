import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {todosReducer} from './reducers';
import {rootSaga} from './sagas';
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga';
import {ConnectedRouter, routerMiddleware, routerReducer} from 'react-router-redux';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {injectGlobal} from 'emotion';

injectGlobal`
    body { background-color: #eaeaea;}
`;

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    combineReducers({
        todos: todosReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

