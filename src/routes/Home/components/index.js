import React, { Component } from 'react'
import { is, fromJS } from 'immutable'
import { Button } from 'antd'
import '../styles/index.scss'
import { Link } from 'react-router-dom'
import OldReactComponent from './OldReactComponent'
import NewReactComponent from './NewReactComponent'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    state = {

    }
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillReceivePorps(nextProps) {

    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    componentWillUpdate(nextProps, nextState) {

    }
    componentDidUpdate() {

    }
    render() {
        return (
            <div className="Home_Wrap">
                <h1>Hello World!!!</h1>
                <p><Link to="/subWeb?id=1"><Button type="primary">快点我</Button></Link></p>
                <OldReactComponent />
                <NewReactComponent />
            </div>
        )
    }
    componentWillUnmount() {

    }
}
