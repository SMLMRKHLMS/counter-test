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
      updater: this.updaterMethod
    })

    state = initialState

    updaterMethod = mapFn => {
      const prevState = { ...this.state }
      this.setState(
        mapFn,
        () => subscriptions.forEach(fn => fn(
          prevState,
          this.state,
          mapFn.displayName || mapFn.name || 'anonymous'
        ))
      )
    }

    render() { return <Component { ...this.props } /> }
  }
}

export default wrapStore
