import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-interpolation',
    templateUrl: './string-interpolation.component.html',
    styleUrls: ['./string-interpolation.css']
})
export class StringInterPolation{
    serverID: number = 10;
    serverStatus: string = "offline";
    constructor()
    {
        this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor()
    {
        return this.serverStatus === "online" ? 'green' : 'red';
    }

}