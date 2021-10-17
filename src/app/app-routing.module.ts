import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SettingspageComponent } from './settingspage/settingspage.component';
import { FriendspageComponent } from './friendspage/friendspage.component';
import { MessagespageComponent } from './messagespage/messagespage.component';
import { NewmessagepageComponent } from './newmessagepage/newmessagepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'', redirectTo: "login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"new-user", component:NewUserComponent},
  {path:"settings", component:SettingspageComponent},
  {path:"friends", component:FriendspageComponent},
  {path:"messages/:id", component:MessagespageComponent},
  {path:"newmessage", component:NewmessagepageComponent},
  {path:"aboutus", component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
