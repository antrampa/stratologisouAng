import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsoldierComponent } from './newsoldier/newsoldier.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';

const routes: Routes = [
  { path: 'new-soldier', component: NewsoldierComponent },
  { path: 'new-camp', component: NotImplementedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
