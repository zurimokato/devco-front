import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/guards/role.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { TableTestComponent } from './table-test/table-test.component';

const routes: Routes = [
  {
    path: 'add-user',
    component: CreateUserComponent,
    canActivate:[RoleGuard]
  },
  {
    path:'test',
    component:TableTestComponent,
    canActivate:[RoleGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
