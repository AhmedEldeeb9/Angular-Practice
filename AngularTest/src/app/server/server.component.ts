import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'No Server Created';
  serverCreated = false;
  ServerName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000000);
  }
  onclickStatus() {
    this.serverCreated = true;
    this.serverStatus =
      'Server has been Created Well with Name ' + this.ServerName + ' !!';
  }

  updateServerStatus(event: Event) {
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverCreated === false ? 'red' : 'green';
  }
  ngOnInit(): void {}
}
