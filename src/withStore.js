import PropTypes from 'prop-types'
import React from 'react'

const noop = () => ({})

const wrapWithStore = (
  mappedState = noop,
  mappedActions = noop
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
