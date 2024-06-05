import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { ImpNoticeComponent } from './imp-notice/imp-notice.component';

const routes: Routes = [
 
    { path: 'imp-notice', component: ImpNoticeComponent, title: 'imp-notice' },

   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class DonorRoutingModule {}
  