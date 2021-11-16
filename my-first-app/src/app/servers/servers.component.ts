import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewUser = false;
  serverCreationStatus = "no server created";
  serverName = '';
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
  onServerCreation(){
    this.serverCreated = true;
    this.serverCreationStatus = "server created"+ this.serverName;
  }
  onServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
