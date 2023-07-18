const http = require('http')

const server = http.createServer()

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', socket => {
  console.log('A user connected')

  socket.on('message', data => {
    console.log('Received message:', data)
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
