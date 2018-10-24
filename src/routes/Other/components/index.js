import React, { Component, PropTypes } from 'react'
import { is, fromJS } from 'immutable'
import '../styles/index.scss'

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
                <h1>Hello other!!!</h1>
            </div>
        )
    }
    componentWillUnmount() {

    }
}
