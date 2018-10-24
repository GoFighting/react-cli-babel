import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Bundle from './Bundle';
const Loading = function() {
	return <div>Loading...</div>;
};
const createComponent = (component) => () => {
	let AsyncComponent = <Bundle load={component}>{(Async) => (Async ? <Async /> : <Loading />)}</Bundle>;
	return AsyncComponent;
};

import Home from 'bundle-loader?lazy&name=Home!./Home';
import Other from 'bundle-loader?lazy&name=Other!./Other';
import SubWeb from 'bundle-loader?lazy&name=SubWeb!./SubWeb';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={'/'} component={createComponent(Home)} />
                <Route path={'/subWeb'} component={createComponent(SubWeb)} />
                <Route path={'/other'} component={createComponent(Other)} />
            </Switch>
        )
    }
}
