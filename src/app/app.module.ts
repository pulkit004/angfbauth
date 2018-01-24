import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';

import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAw1sJKhBgoZIfXZvKuJykztyXrkNb5ATU',
  authDomain: 'angfirebaseauth.firebaseapp.com',
  databaseURL: 'https://angfirebaseauth.firebaseio.com',
  projectId: 'angfirebaseauth',
  storageBucket: '',
  messagingSenderId: '566300869277'
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    routes

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
