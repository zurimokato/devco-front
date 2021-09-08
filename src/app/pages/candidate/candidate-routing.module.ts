import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeTestComponent } from './take-test/take-test.component';

const routes: Routes = [
  {
    path:'take-test/:id',
    component:TakeTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
