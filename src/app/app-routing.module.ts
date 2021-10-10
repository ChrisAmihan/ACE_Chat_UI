import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path:'', redirectTo: "login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"content", component:ContentComponent},
  {path:"new-user", component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
