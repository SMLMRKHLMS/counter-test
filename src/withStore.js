import PropTypes from 'prop-types'
import React from 'react'

const identity = arg => arg

const wrapWithStore = (
  mappedState = identity,
  mappedActions = identity
) => {

  return Component => {

    const withStore = (props, { state, updater }) => (
      <Component
        { ...props }
        { ...mappedActions(updater) }
        { ...mappedState(state) }
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
}

export default wrapWithStore;
