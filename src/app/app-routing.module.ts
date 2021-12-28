import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { AccountDetailsComponent } from './navbar/account-details/account-details.component';
import { DeleteDataComponent } from './navbar/delete-data/delete-data.component';
import { GetDataComponent } from './navbar/get-data/get-data.component';
import { IdComponent } from './navbar/get-data/id/id.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostDataComponent } from './navbar/post-data/post-data.component';
import { PutDataComponent } from './navbar/put-data/put-data.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"login",pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"create-account",
    component:CreateAccountComponent,

  },
  {
    path:"navbar",
    component:NavbarComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"",
        redirectTo:"navbar",
        pathMatch:"full"
      },
      {
        path:"get-data",
        component:GetDataComponent,
      },
      {
        path:"delete-data",
        component:DeleteDataComponent
      },
      {
        path:"post-data",
        component:PostDataComponent
      },
      {
        path:"put-data",
        component:PutDataComponent
      },
      {
        path:"account-details",
        component:AccountDetailsComponent
      },
      {
        path:"id/:idno",
        component:IdComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayOfComponents = [
  NavbarComponent,LoginComponent,PutDataComponent,PostDataComponent,DeleteDataComponent,GetDataComponent
]
