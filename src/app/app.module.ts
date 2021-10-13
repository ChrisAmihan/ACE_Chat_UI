import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { FriendspageComponent } from './friendspage/friendspage.component';
import { MessagespageComponent } from './messagespage/messagespage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendsComponent } from './friends/friends.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NewUserComponent,
    LoginComponent,
    MessageBoxComponent,
    ChatListComponent,
    ChatWindowComponent,
    FriendspageComponent,
    MessagespageComponent,
    SettingspageComponent,
    SettingsComponent,
    FriendsComponent,
    NotificationsComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
