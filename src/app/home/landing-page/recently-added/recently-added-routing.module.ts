import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentlyAddedComponent } from './recently-added.component';

const routes: Routes = [
  {path:'',component:RecentlyAddedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecentlyAddedRoutingModule { }
