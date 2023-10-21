const socket = new WebSocket('ws://localhost:8080/ws')

const connect = (callback) => {
  console.log('Attempting Connection...')
  console.log(callback)
  socket.onopen = () => {
    console.log('Successfully Connected')
  }
  socket.onmessage = msg => {
    console.log(msg)
    callback(msg)
  }
  socket.onclose = event => {
    console.log('Socket Closed Connection: ', event)
  }
  socket.onerror = error => {
    console.log('Socket Error: ', error)
  }
}

const sendMsg = msg => {
  console.log('sending msg: ', msg)
  socket.send(msg)
}

export { connect, sendMsg }
