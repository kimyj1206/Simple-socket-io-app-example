// create server instance
const http = require('http').createServer();

const io = require('socket.io')(http, {
  // Cross-Origin Resource Sharing (CORS)
  // 모든 도메인에서의 요청을 허용한다
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('A user connected');

  // server -> client send
  socket.on('message', (message) => {
    io.emit('message', `${socket.id.substr(0, 2)} said ${message}`)
  })
});

const port = 8080;
http.listen(port, () => {
  console.log(`${port} connected successfully`);
});