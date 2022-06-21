import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdMainComponent } from './components/ad-main/ad-main.component';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/login/form/form.component';
import { TranscriptComponent } from './components/ad-main/transcript/transcript.component';
import { MessagesComponent } from './components/ad-main/transcript/messages/messages.component';
import { SendMessageComponent } from './components/ad-main/transcript/send-message/send-message.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: 'agent', component: AdMainComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AdMainComponent,
    FormComponent,
    TranscriptComponent,
    MessagesComponent,
    SendMessageComponent,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
