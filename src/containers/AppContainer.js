import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import history from '../store/history';
import createStore from '../store/createStore';
const store = createStore(history, {});
import Routes from '../routes'

export default class AppContainer extends Component {
	static propTypes = {
		// routes: PropTypes.object.isRequired,
		// store: PropTypes.object.isRequired
	};
	componentDidMount() {
	}
	shouldComponentUpdate() {
		return false;
	}
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Routes />
				</Router>
			</Provider>
		);
	}
}
