import PropTypes from 'prop-types'
import React from 'react'

const wrapStore = (initialState = {}, subscriptions = []) => {

  return Component => class Store extends React.Component {

    static childContextTypes = {
      state: PropTypes.object,
      updater: PropTypes.func
    }

    getChildContext = () => ({
      state: this.state,
      updater: this.updater
    })

    state = initialState

    updater = (reducer, action) => {
      const prevState = { ...this.state }
      this.setState(
        reducer,
        () => subscriptions.forEach(fn => fn(
          prevState,
          this.state,
          action || reducer.name || 'ANONYMOUS'
        ))
      )
    }

    render() { return <Component { ...this.props } /> }
  }
}

export default wrapStore
