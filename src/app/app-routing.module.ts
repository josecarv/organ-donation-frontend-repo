import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanualComponent } from './usermanual/imp-notice';



const routes : Routes = [

 

  {path: 'usermanual/imp-notice', component:UsermanualComponent, title: "imp-notice" }, 
   {path: 'donor', loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)},  
  {path: '', redirectTo: '', pathMatch:'full' }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
