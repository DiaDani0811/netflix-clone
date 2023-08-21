import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoLoaderComponent } from './logo-loader/logo-loader.component';

const routes: Routes = [
{path:'',component:LogoLoaderComponent},
{path:'home',loadChildren:() =>import('../app/home/home.module').then(module=>module.HomeModule)},
{path:'**',component:LoginComponent},
{path:'login',component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
