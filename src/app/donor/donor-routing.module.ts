import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorOrgansComponent } from './donor-organs/donor-organs.component';

const routes: Routes = [
 
    { path: 'donor/register', component: DonorRegistrationComponent, title: 'donor registration' },
    { path: 'donor/organs', component: DonorOrgansComponent, title: 'donor organs' },

   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DonorRoutingModule {}
  