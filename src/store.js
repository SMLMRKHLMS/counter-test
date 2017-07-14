import PropTypes from 'prop-types'
import React from 'react'

const store = initialState => Component => class Store extends React.Component {

  static childContextTypes = {
    state: PropTypes.object,
    updater: PropTypes.func
  }

  getChildContext = () => ({
    state: this.state,
    updater: this.updaterMethod
  })

  state = initialState

  updaterMethod = fn => () => this.setState(fn)

  render() { return <Component { ...this.props } /> }
}

export default store
