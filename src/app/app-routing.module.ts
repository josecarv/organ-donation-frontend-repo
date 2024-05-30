import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowOrgandonationComponent } from './know-organdonation/know-organdonation.component';


const routes : Routes = [
  {path: 'know-organdonation', component: KnowOrgandonationComponent, title: "know-organdonation" }, 
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
