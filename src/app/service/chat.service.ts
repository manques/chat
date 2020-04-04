import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('http://localhost:8000');
    console.log(this.socket['json']);
      // call dialog
    const username = 'admin' + Math.floor( Math.random() * 100) ;
    const setName = { username };
    console.log(setName);
    this.send(setName);
    window.localStorage.removeItem('username');
    window.localStorage.setItem('username', username);
  }

  send(msg) {
    this.socket.emit('newMessage', msg);
  }

  recieve() {
    return Observable.create( observable => {
      this.socket.on('newMessage', data => {
        observable.next(data);
      });
    });
  }

}
