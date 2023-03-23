import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './landing-page/about/about.component';
import { FaqComponent } from './landing-page/faq/faq.component';
import { FeaturesComponent } from './landing-page/features/features.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PricingComponent } from './landing-page/pricing/pricing.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path : 'home', component: LandingPageComponent,
  children:[
    {path : 'home', component: LandingPageComponent},
    {path:'features',component:FeaturesComponent},
    {path:'pricing',component:PricingComponent},
    {path:'faqs',component:FaqComponent},
    {path:'about',component:AboutComponent}]
},
{path:'login', loadChildren:()=> import('../auth/auth.module').then(authMod=> authMod.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
