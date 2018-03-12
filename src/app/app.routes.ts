import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: "/",
    pathMatch: "full"
  },
  {
      path: "",
      component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: '**', 
    redirectTo: '/' 
  }
];

export const appRoutingProviders: any[] = [
  //AuthService
];

export const routing = RouterModule.forRoot(appRoutes);