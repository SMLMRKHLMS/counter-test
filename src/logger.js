const logger = ({ collapsed = true }) => (nextState, prevState, reducer) => {
  const title = `%c${ (new Date()).toLocaleString() } %cstore %cupdated %cby %c${ reducer.name }`
  const styles = ['color: green', 'color: black', 'color: blue', 'color: black', 'color: orange']
  console[collapsed ? 'groupCollapsed' : 'group'](title, ...styles)
  console.log(`Prev State: `, prevState)
  console.log(`Next State: `, nextState)
  console.groupEnd(title)
}

export default logger;
