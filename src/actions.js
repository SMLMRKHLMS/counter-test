export const decrement = ({ count }) => ({ count: count > 0 ? count - 1 : 0 })
export const increment = ({ count }) => ({ count: count + 1 })
