import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { routerMiddleware } from 'react-router-redux';
import { updateLocation } from './location'

export default (history, initialState = {}) => {
	const enhancers = compose(
		applyMiddleware(thunk, routerMiddleware(history))
	);
	const store = createStore(makeRootReducer(), initialState, enhancers);
	history.listen(updateLocation(store))
	return store;
};
