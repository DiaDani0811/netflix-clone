import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component'

const routes: Routes = [
  {path:'sdcf', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent},
// {path :'page',component:PageComponentComponent},
{path:'',pathMatch:'full',redirectTo:'home'}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
