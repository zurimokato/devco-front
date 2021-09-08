import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleCandidateGuard } from 'src/app/guards/role-candidate.guard';
import { TakeTestComponent } from './take-test/take-test.component';

const routes: Routes = [
  {
    path:'take-test/:id',
    component:TakeTestComponent,
    canActivate:[RoleCandidateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
