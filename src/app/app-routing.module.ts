import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoLoaderComponent } from './logo-loader/logo-loader.component';

const routes: Routes = [{
  path:'',component:LogoLoaderComponent
},
  {
  path:'home',loadChildren:() =>import('../app/home/home.module').then(module=>module.HomeModule)
}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
