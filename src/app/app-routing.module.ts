import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { InsertempComponent } from './insertemp/insertemp.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'insert', component: InsertempComponent },        
  { path: 'view', component: ViewempComponent },            
  { path: 'about', component: AboutComponent },             
  { path: 'contact', component: HomeComponent },            
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
