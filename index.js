const WebSocket = require('ws');

const wsServer = new WebSocket.Server({ port: 8080 });

wsServer.on('connection', function connection(ws) {
  console.log(wsServer.clients);
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
});
