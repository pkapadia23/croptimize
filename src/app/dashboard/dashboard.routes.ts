import { Routes, RouterModule, CanActivate } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';

const routes = [
    {
      path: '',
      component: DashboardComponent
    }
];

export const DashboardRoutes = RouterModule.forChild(routes);