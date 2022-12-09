import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// layouts
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';

// admin views
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { MapsComponent } from './views/admin/maps/maps.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { TablesComponent } from './views/admin/tables/tables.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// no layouts views
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { ProfileComponent } from './views/profile/profile.component';
import {EmpComponent} from './layouts/Employe/emp.component';
import {ListServiceProjectComponent} from './views/Employe/list-service-project/list-service-project.component';
import {ListAllTaskComponent} from './views/Employe/list-all-task/list-all-task.component';
import {ListUserProjectComponent} from './views/Employe/list-user-project/list-user-project.component';
import {ListUserProjectTaskComponent} from './views/Employe/list-user-project-task/list-user-project-task.component';
import {AddProjectComponent} from './views/Employe/add-project/add-project.component';
import {ListCommentComponent} from './views/Employe/list-comment/list-comment.component';

const routes: Routes = [
  // admin views
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'emp',
    component: EmpComponent,
    children: [
      { path: 'serviceProject', component: ListServiceProjectComponent },
      { path: 'projectTask', component: ListAllTaskComponent },
      { path: 'myProject', component: ListUserProjectComponent },
      { path: 'addProject', component: AddProjectComponent },
      { path: 'myprojectTask', component: ListUserProjectTaskComponent },
      { path: 'listComment', component: ListCommentComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'maps', component: MapsComponent },
      { path: '', redirectTo: 'serviceProject', pathMatch: 'full' },
    ],
  },
  // no layout views
  { path: 'profile', component: ProfileComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
