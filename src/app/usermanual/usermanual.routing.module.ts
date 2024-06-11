import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { ImpnoticeComponent } from './impnotice/impnotice.component';
import { ImplinksComponent } from './implinks/implinks.component';
import { FaqComponent } from './faq/faq.component';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';

const routes: Routes = [
 
    { path: 'usermanual/impnotice', component: ImpnoticeComponent, title: 'impnotice' },
    { path: 'usermanual/implinks', component: ImplinksComponent, title: 'implimks' },
    { path: 'usermanual/faq', component: FaqComponent, title: 'faq' },
    { path: 'usermanual/contactinfo', component: ContactinfoComponent, title: 'contactinfo' },
   
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class usermanualroutingmodule{}
  