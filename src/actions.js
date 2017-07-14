export const decrement = ({ count }) => ({ count: count > 0 ? count - 1 : 0 })
decrement.displayName = 'action/DECREMENT'

export const increment = ({ count }) => ({ count: count + 1 })
increment.displayName = 'action/INCREMENT'
