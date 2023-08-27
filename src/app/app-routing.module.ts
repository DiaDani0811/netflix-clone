import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoLoaderComponent } from './logo-loader/logo-loader.component';

const routes: Routes = [
{path:'', redirectTo:'Loading', pathMatch:'full'},
{path:'Loading',component:LogoLoaderComponent},
{path:'home',loadChildren:() =>import('../app/home/home.module').then(module=>module.HomeModule)},
{path:'auth',loadChildren:()=>import('../app/auth/auth.module').then(auth=>auth.AuthModule)}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
