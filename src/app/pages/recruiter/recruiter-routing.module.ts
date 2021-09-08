import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from './create-test/create-test.component';
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
  {
    path: 'add-test',
    component: CreateTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
