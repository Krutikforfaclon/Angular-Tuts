import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { StringInterPolation } from './string-interpolation/string-interpolation.component';
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    StringInterPolation
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
