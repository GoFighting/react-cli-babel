import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { is, fromJS } from 'immutable'
import { setTime } from '../actions'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import '../styles/index.scss'

class SubWeb extends Component {
    constructor(props) {
        super(props)
        this._setTime = this._setTime.bind(this)
    }
    _setTime(time) {
        this.props.setTime(time)
    }
    componentWillMount() {

    }
    componentDidMount() {
        // this.props.setTime(2)
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
        let { timeReducer } = this.props
        return (
            <div className="SubWeb_Wrap">
                <p>{timeReducer}</p>
                <p><Button onClick={e => this.props.setTime(timeReducer + 1)}>+1</Button></p>
                <p><Button type="primary" onClick={e => linkTo.push('/')}>回首页</Button></p>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}

const mapStateToProps = (state, ownProps) => {
    return state.subweb
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    setTime: (time) => {
        dispatch(setTime(time))
    }
})
// export default SubWeb
export default connect(mapStateToProps, mapDispatchToProps)(SubWeb)
