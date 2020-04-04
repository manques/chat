import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatService } from '../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked {
  checkUsername;
  username;
  scrollH;
  scrollT;
  clientH;
  msgList;
  msg;
  view = false;
  @ViewChild('mmm') mss: ElementRef;
  constructor(private chat: ChatService) {
  }
  ngOnInit() {
  }

// send
send() {
  console.log(this.msg);
  const setData = { msg: this.msg };
  if (this.msg) {
    console.log(setData);
    this.chat.send(setData);
    this.msg = '';
  }

}

//
ngAfterViewChecked() {
  this.scrollH = this.mss.nativeElement.scrollHeight;
  this.scrollT = this.mss.nativeElement.scrollTop;
  this.clientH = this.mss.nativeElement.clientHeight;
  if (this.scrollH !== this.clientH) {
    this.mss.nativeElement.scrollTop = this.scrollH - this.clientH;
  }
  this.view = true;
  this.chat.recieve().subscribe( data => {
    this.msgList = data;
  });
  this.checkUsername = window.localStorage.getItem('username');
  console.log(this.checkUsername);
}


}
