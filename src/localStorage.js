export const getItem = (key, fallback) => {
  const item = JSON.parse(localStorage.getItem(key))
  return item ? item : fallback
}

export const setItem = ({
  key,
  setIf = true
} = {}) => (type, state) => {
  const shouldSave = typeof setIf === 'function'
    ? setIf(type, state)
    : setIf
  if (shouldSave) localStorage.setItem(key, JSON.stringify(state))
}
