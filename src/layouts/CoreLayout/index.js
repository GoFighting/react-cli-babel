import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const CoreLayout = ({ children }) => {
    console.log(children)
	class Main extends Component {
        render() {
            return (
                <div className="Main-Component">
                    {children}
                </div>
            )
        }
    }
    return <Main />
}

CoreLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default CoreLayout
