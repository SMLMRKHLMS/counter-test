const logger = ({ collapsed = true, logIf = true } = {}) => (action, currentState, prevState) => {

  const shouldLog = typeof logIf === 'function'
    ? logIf(action, currentState, prevState)
    : logIf

  if (shouldLog) {
    const title = `%c${ (new Date()).toLocaleString() } %cstore %cupdated %cby %c${ action }`
    const styles = ['color: green', 'color: black', 'color: blue', 'color: black', 'color: orange']
    console[collapsed ? 'groupCollapsed' : 'group'](title, ...styles)
    console.log(`Prev State: `, prevState)
    console.log(`Next State: `, currentState)
    console.groupEnd(title)
  }
}

export default logger;
