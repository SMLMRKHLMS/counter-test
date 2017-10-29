import PropTypes from 'prop-types'
import React from 'react'

const createStore = (initialState = {}, subscriptions = []) => {

  return Component => class Store extends React.Component {

    static childContextTypes = {
      state: PropTypes.object,
      updater: PropTypes.func
    }

    getChildContext() {
      return {
        state: this.state,
        updater: this.updaterMethod
      }
    }

    state = initialState

    updaterMethod = (type, reducer) => {
      const prevState = { ...this.state }
      this.setState(
        reducer,
        () => subscriptions.forEach(fn => fn(
          type,
          this.state,
          prevState
        ))
      )
    }

    render() { return <Component { ...this.props } /> }
  }
}

export default createStore
