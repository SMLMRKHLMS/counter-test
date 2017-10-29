const logger = ({
  collapsed = true,
  logIf = true
} = {}) => (type, currentState, prevState) => {

  const shouldLog = typeof logIf === 'function'
    ? logIf(type, currentState, prevState)
    : logIf

  if (shouldLog) {
    const title = `%c${ (new Date()).toLocaleString() } %cstore %cupdated %cby %c${ type }`
    const styles = ['color: green', 'color: black', 'color: blue', 'color: black', 'color: orange']
    console[collapsed ? 'groupCollapsed' : 'group'](title, ...styles)
    console.log(`Prev State: `, prevState)
    console.log(`Next State: `, currentState)
    console.groupEnd(title)
  }
}

export default logger;
