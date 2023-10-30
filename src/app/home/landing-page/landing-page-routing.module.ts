import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',loadChildren:()=>import('../landing-page/home/home.module').then(res=>res.HomeModule)},
    {path:'movies',loadChildren:()=>import('../landing-page/movies/movies.module').then(res=>res.MoviesModule)},
    {path:'mylist',loadChildren:()=>import('../landing-page/mylist/mylist.module').then(res=>res.MylistModule)},
    {path:'originals',loadChildren:()=>import('../landing-page/originals/originals.module').then(res=>res.OriginalsModule)},
    {path:'recentlyAdded',loadChildren:()=>import('../landing-page/recently-added/recently-added.module').then(res=>res.RecentlyAddedModule)},
    {path:'series',loadChildren:()=>import('../landing-page/series/series.module').then(res=>res.SeriesModule)},
   

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
