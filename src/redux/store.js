import {createStore, applyMiddleware, combineReducers,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import authenticationReducer from './reducers/authReducer'
import sagasPrimary from './sagas/Sagas'
const reducers= combineReducers({
    authenticationReducer
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));


sagaMiddleware.run(sagasPrimary);
export default store;