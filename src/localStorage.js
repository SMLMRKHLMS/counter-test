export const retrieveFromLocalStorage = (key, fallback) => {
  const item = JSON.parse(localStorage.getItem(key))
  return item ? item : fallback
}

export const saveToLocalStorage = ({
  key,
  saveIf = true
} = {}) => (type, state) => {
  const shouldSave = typeof saveIf === 'function'
    ? saveIf(type, state)
    : saveIf
  if (shouldSave) localStorage.setItem(key, JSON.stringify(state))
}