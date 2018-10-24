import { combineReducers } from 'redux'
import locationReducer from './location'
import subwebReducer from '../routes/SubWeb/reducers'

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        subweb: subwebReducer,
        ...asyncReducers
    })
}

export const injectReducer = (store, { key, reducer }) => {
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) {
        return
    }
    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer