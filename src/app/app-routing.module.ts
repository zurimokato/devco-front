import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
