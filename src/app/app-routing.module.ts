import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewComponent } from './add-new/add-new.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path:'new', component: NewComponent},
  {path: 'add', component: AddNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
