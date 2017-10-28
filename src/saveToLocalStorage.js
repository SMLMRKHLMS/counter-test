export const retrieveFromLocalStorage = (key, fallback) => {
  const item = JSON.parse(localStorage.getItem(key))
  return item ? item : fallback
}

export const saveToLocalStorage = (key, condition = true) => (state, _, reducer) => {
  const shouldSave = typeof condition === 'function'
    ? condition(state, reducer)
    : condition
  if (shouldSave) localStorage.setItem(key, JSON.stringify(state))
}
