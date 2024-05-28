import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorComponent } from './donor/donor.component';


const routes : Routes = [
  {path: 'donor', component: DonorComponent, title: "Donor" }, 
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
