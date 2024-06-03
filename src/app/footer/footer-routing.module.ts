import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivatePolicyComponent } from './private-policy/private-policy.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

const routes: Routes = [
 
    { path: 'footer/disclaimer', component: DisclaimerComponent, title: 'Disclaimer' },
    { path: 'footer/copyright', component: CopyrightComponent, title: 'Copyright' },
    { path: 'footer/private-policy', component: PrivatePolicyComponent, title: 'Private-Policy' },
    { path: 'footer/accessibility', component:AccessibilityComponent, title: 'Accessibility' },

   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class FooterRoutingModule {}
  