import React from 'react'
import PropTypes from 'prop-types'

const store = ({
  actions,
  state: initialState
}) => Component => class Store extends React.Component {

  state = initialState

  static childContextTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    state: PropTypes.object
  }

  getChildContext() {
    this.actions = {}
    Object.keys(actions).forEach(key => {
      this.actions[key] = () => this.setState(actions[key])
    })
    return {
      actions: this.actions,
      state: this.state
    };
  }

  render() {
    return <Component />
  }
}

export default store;
