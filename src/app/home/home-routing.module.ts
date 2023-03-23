import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent},
  {path:'login', loadChildren : ()=> import('../auth/auth.module').then(authMod=> authMod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
