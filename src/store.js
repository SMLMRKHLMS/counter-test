import PropTypes from 'prop-types'
import React from 'react'

const store = ({ actions, state: initialState }) => Component => class Store extends React.Component {

  state = initialState

  static childContextTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    state: PropTypes.object
  }

  getChildContext() {

    this.actions = {}

    Object.keys(actions).forEach(key => {
      this.actions[key] = (...args) => {
        this.setState(state => actions[key](state, ...args))
      }
    })

    return { actions: this.actions, state: this.state }
  }

  render() { return <Component /> }
}

export default store
