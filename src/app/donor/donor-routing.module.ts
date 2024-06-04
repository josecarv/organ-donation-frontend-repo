import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';

const routes: Routes = [
 
    { path: 'donor/register', component: DonorRegistrationComponent, title: 'donor registration' },

   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DonorRoutingModule {}
  