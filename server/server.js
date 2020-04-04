const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const msgList = [];


let newValue;
//add cors
app.use(cors());
//create socket server
const server = http.createServer(app);
const io = socketio(server);

//
app.get('/', (req, res) => {
  res.send('http server working');
});

// mkkkkkkkk
io.on('connection', (socket) => {
  console.log('user is conntected!!');
  console.log('-------------------------------------socket client -----------------------------------');
  socket.on('newMessage', (data) => {
    console.log(socket.client.id);
    console.log(data);
    if((msgList.some(e => e.id === socket.client.id)) && data.msg){
      console.log('msg \n old user');
      oldDataList = msgList.find( e => e.id === socket.client.id);
      console.log(oldDataList);
      console.log(oldDataList.username);
      const listData = { id: socket.client.id, username: oldDataList.username , msg: data.msg, created:  Date.now() };
      msgList.push(listData);
      console.log(msgList);
      io.emit('newMessage', msgList);
    } else {

      console.log('new user');
      const listData = { id:socket.client.id, username: data.username, msg: data.msg, created: Date.now() };
      msgList.push(listData);
      console.log(msgList);
      io.emit('newMessage', msgList);
    }
  });
  io.emit('newMessage', msgList);
});



const port = process.env.PORT || 8000;
server.listen(port , function() {
  console.log(`server listen at port ${port}`);
});
