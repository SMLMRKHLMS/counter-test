import PropTypes from 'prop-types'
import React from 'react'

const identity = arg => arg

const wrapWithStore = (
  mappedState = identity,
  actions = identity
) => {

  return Component => {

    const mappedActions = updater => Object
      .entries(actions)
      .reduce((acc, [key, value]) => Object.assign(acc, {
        [key]: (...args) => {

          const mappedArgs = args.map(arg => {
            if (typeof arg === 'object') return Object.assign({}, arg)
            return arg
          })

          updater(
            state => value(state, ...mappedArgs),
            value.name
          )
        }
      }), {});

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
