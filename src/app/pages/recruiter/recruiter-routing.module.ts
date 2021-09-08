import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { TableTestComponent } from './table-test/table-test.component';

const routes: Routes = [
  {
    path: 'add-user',
    component: CreateUserComponent
  },
  {
    path:'test',
    component:TableTestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
