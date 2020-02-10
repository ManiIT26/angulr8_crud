import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';  
import { RegisterComponent } from './register/register.component';    
import { MuAuthGuard } from './mu-auth.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch:'full'

  },
  {
    path:'product/create',
    component:ProductAddComponent,
    canActivate:[MuAuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
    canActivate:[MuAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
