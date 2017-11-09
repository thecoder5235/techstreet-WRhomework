
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './account/logout.component';
import { UserDetailComponent } from './user/detail.component';
import { AddUserComponent } from './add-user/add-user.component';

const mainRoutes: Routes = [

  { path: '', component: DashboardComponent },

  { path: 'logout', component: LogoutComponent },

  { path: 'users/:id', component: UserDetailComponent },

  { path: 'add', component: AddUserComponent }

];

@NgModule({

  imports: [ RouterModule.forRoot(mainRoutes) ],

  exports: [ RouterModule ]

})

export class AppRoutingModule { }
