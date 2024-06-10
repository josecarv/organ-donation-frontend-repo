import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImpnoticeComponent } from './usermanual/impnotice/impnotice.component';
import { ContactinfoComponent } from './usermanual/contactinfo/contactinfo.component';
import { ImplinksComponent } from './usermanual/implinks/implinks.component';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';




const routes : Routes = [


  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'know-organdonation', component: KnowOrgandonationComponent, title: 'know-organdonation' },
 
  
  
  {path: 'usermanual', loadChildren: () => import('./usermanual/usermanual.module').then(m => m. usermanualModule )},  
  
   {path: 'donor', loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)},  
  {path: '', redirectTo: '/impnotice', pathMatch:'full' }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
