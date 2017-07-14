import PropTypes from 'prop-types'
import React from 'react'

const store = ({ state: initialState }) => Component => class Store extends React.Component {

  state = initialState

  static childContextTypes = {
    state: PropTypes.object,
    updater: PropTypes.func
  }

  getChildContext = () => ({
    state: this.state,
    updater: this.updaterMethod
  })

  updaterMethod = fn => () => this.setState(fn)

  render() { return <Component /> }
}

export default store
