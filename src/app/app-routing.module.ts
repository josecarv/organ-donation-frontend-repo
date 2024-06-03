import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path: 'donor', loadChildren: () => import('./donor/donor.module').then(m => m.DonorModule)},  
  {path: 'footer', loadChildren: () => import('./footer/footer.module').then(m => m.FooterModule)},  
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
