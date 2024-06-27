import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';
import { HomeComponent } from './home/home.component';
import { editdonorinfoComponent } from './editdonorinfo/editdonorinfo.component';


const routes : Routes = [
  
  {path: 'donor', loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)}, 
  {path: 'know-organdonation', component: KnowOrgandonationComponent, title: "know-organdonation" },  

  {path: 'editdonorinfo', component: editdonorinfoComponent, title: "EditProfile" },  
  {path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)},  
  {path: 'usermanual', loadChildren: () => import('./usermanual/usermanual.module').then(m => m. usermanualModule )},  
  {path: 'home', component: HomeComponent, title: "Dashboard" }, 
  {path: '', redirectTo: '/home', pathMatch:'full' }


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
