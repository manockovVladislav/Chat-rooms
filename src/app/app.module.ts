import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MapComponent } from './shared-components/map/map.component';
import { HomeComponent } from './containers/home/home.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { LoginComponent } from './containers/login/login.component';
import { ChatComponent } from './containers/home/container-components/chat/chat.component';
import { ChatCreateComponent } from './containers/home/container-components/chat-create/chat-create.component';
import { MessageComponent } from './containers/home/container-components/message/message.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from 'angularfire2';

import { routes } from './app.routes';


export const firebaseConfig = {
  apiKey: 'AIzaSyAJ2zp9kQkPHjY2EYy0zA6_63Xa5QNB3Os',
  authDomain: 'geochat-b628f.firebaseapp.com',
  databaseURL: 'https://geochat-b628f.firebaseio.com',
  projectId: 'geochat-b628f',
  storageBucket: '',
  messagingSenderId: '121096908408'
};


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    LayoutComponent,
    LoginComponent,
    ChatComponent,
    ChatCreateComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
