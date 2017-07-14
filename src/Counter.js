import styled from 'emotion/react';
import React from 'react'
import withStore from './withStore'

const Button = styled.button`
  border: 0;
  border-radius: 0;
  margin: 0 10px;
  padding: 10px 20px;
`

const Counter = ({
  count,
  decrement,
  increment,
  hello
}) => (
  <div>
    <div>{ `App Name: Hello, ${ hello }!` }</div>
    <div>{ count }</div>
    <Button onClick={ decrement }>-</Button>
    <Button onClick={ increment }>+</Button>
  </div>
)

const decrement = ({ count }) => ({ count: count > 0 ? count - 1 : 0 })
const increment = ({ count }) => ({ count: count + 1 })
const mappedActions = updater => ({ decrement: updater(decrement), increment: updater(increment) })
const mappedState = state => state

export default withStore(mappedState, mappedActions)(Counter)
