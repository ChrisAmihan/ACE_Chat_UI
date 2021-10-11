import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { FriendspageComponent } from './friendspage/friendspage.component';
import { MessagespageComponent } from './messagespage/messagespage.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { MessagesearchbarComponent } from './messagesearchbar/messagesearchbar.component';
import { SettingsComponent } from './settings/settings.component';
import { FriendsComponent } from './friends/friends.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NewUserComponent,
    LoginComponent,
    MessageBoxComponent,
    SearchBarComponent,
    ChatListComponent,
    ChatWindowComponent,
    FriendspageComponent,
    MessagespageComponent,
    SettingspageComponent,
    MessagesearchbarComponent,
    SettingsComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
