import PropTypes from 'prop-types'
import React from 'react'

const wrapWithStore = (mappedState, reducers) => Component => {

  const mappedReducers = updater => Object
    .entries(reducers || {})
    .reduce((acc, [key, value]) => ({
      ...acc,
      [key]: (...args) => {
        const copied = args.map(arg => typeof arg === 'object' ? { ...arg } : arg)
        const reducer = state => value(state, ...copied)
        updater(key, reducer)
      }
    }), {});

  const withStore = (props, { state, updater }) => (
    <Component
      { ...props }
      { ...mappedReducers(updater) }
      { ...mappedState ? mappedState(state) : {} }
    />
  )

  withStore.contextTypes = {
    state: PropTypes.object,
    updater: PropTypes.func
  }

  withStore.displayName = `withStore(${
    Component.displayName ||
    Component.name ||
    'Component'
  })`

  return withStore
}

export default wrapWithStore;
