import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'

import './styles/app.scss' // 引入样式
import './shared/base'

ReactDOM.render(
    <AppContainer />,
    document.getElementById('app')
)
