import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleware from 'redux-thunk'
// import { reducer as formReducer } from 'redux-form'

import launchesReducer from "./launches-reducer";
// import appReducer from "./app-reducer"

let reducers = combineReducers({
   // app: appReducer,
   launches: launchesReducer
   
   // form: formReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

// let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store