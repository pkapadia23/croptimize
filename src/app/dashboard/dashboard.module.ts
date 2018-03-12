import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";
import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
