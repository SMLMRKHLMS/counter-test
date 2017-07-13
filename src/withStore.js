import React from 'react';
import PropTypes from 'prop-types';

const noop = () => ({})

const withStore = ({
  state: mappedState = noop,
  actions: mappedActions = noop
}) => Component => {

  const HOC = (props, { actions, state }) => (
    <Component
      { ...props }
      { ...mappedState(state) }
      { ...mappedActions(actions) }
    />
  )

  HOC.contextTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    state: PropTypes.object
  }

  HOC.displayName = `withStore(${ Component.displayName || Component.name || 'Component' })`

  return HOC
}

export default withStore;
