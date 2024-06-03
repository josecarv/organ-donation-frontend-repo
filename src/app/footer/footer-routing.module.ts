import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';

const routes: Routes = [
 
    { path: 'footer/disclaimer', component: DisclaimerComponent, title: 'Disclaimer' },
    { path: 'footer/copyright', component: CopyrightComponent, title: 'Copyright' },
    { path: 'footer/private-policy', component: PrivatePolicyComponent, title: 'Private-Policy' },

   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FooterRoutingModule {}
  