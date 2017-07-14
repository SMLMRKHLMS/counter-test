const logger = ({ collapsed }) => (prevState, nextState, updatedBy) => {
  const title = `%c${ (new Date()).toLocaleString() } %cstore %cupdated %cby %c${ updatedBy }`
  const styles = ['color: green', 'color: black', 'color: blue', 'color: black', 'color: orange']
  console[collapsed ? 'groupCollapsed' : 'group'](title, ...styles)
  console.log(`Previous State: `, prevState)
  console.log(`Current State: `, nextState)
  console.groupEnd(title)
}

export default logger;
