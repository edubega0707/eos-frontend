import {createStore, applyMiddleware, combineReducers,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import authenticationReducer from './reducers/authReducer'
import profileReducer from './reducers/profileReducer'
import accountsReducer from './reducers/acoountsReducer'
import sagasPrimary from './sagas/Sagas'
import sagasProfile from './sagas/SagasProfile'
import sagasAccounts from './sagas/SagasAccounts'

const reducers= combineReducers({
    authenticationReducer,
    profileReducer,
    accountsReducer
})

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));


sagaMiddleware.run(sagasPrimary);
sagaMiddleware.run(sagasProfile);
sagaMiddleware.run(sagasAccounts)

export default store;