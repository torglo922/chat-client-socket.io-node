const express = require('express'),
      app     = express(),
      server  = require('http').Server(app),
      io      = require('socket.io')(server);

app.use(express.static('public'));

const onConnect = socket => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
};

io.on('connect', onConnect)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

server.listen(8080, () => {
  console.log('server listening')
})