import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:"",component:HeaderComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:ServicesComponent},
  {path:"contact",component:ContactComponent},
  {path:"home",component:Home1Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
