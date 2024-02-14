import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: "employees", component: EmployeeListComponent},
  {path: "create-employee", component: CreateEmployeeComponent},
  
  {path: "update-employee/:id", component: UpdateEmployeeComponent},

  { path: 'login', component: LoginComponentComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
