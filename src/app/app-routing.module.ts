import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginAccessGuard } from './guards/login-access.guard';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import('./pages/login/login.module').then(m=>m.LoginModule),
    canActivate:[LoginAccessGuard]
  },
  {
    path:'home',
    loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
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
