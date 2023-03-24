import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { FaqComponent } from './landing-page/faq/faq.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';
import { SignupComponent } from '../auth/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent,
  children:[
    {path :'home#', component: LandingPageComponent},
    {path:'tv-shows#',component:FeaturesComponent},
    {path:'movies#',component:PricingComponent},
    {path:'new#',component:FaqComponent},
    {path:'upcoming#',component:AboutComponent}]
},
{path:'login', loadChildren:()=> import('../auth/auth.module').then(authMod=> authMod.AuthModule)},
{path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
