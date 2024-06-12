import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';
import { HomeComponent } from './home/home.component';


const routes : Routes = [
  {path: 'donor', loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)}, 
  {path: 'know-organdonation', component: KnowOrgandonationComponent, title: "know-organdonation" },  
  {path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)},  
  {path: 'usermanual', loadChildren: () => import('./usermanual/usermanual.module').then(m => m. usermanualModule )},  
  {path: 'home', component: HomeComponent, title: "know-organdonation" }, 
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
