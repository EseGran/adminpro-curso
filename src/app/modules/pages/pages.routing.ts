import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from 'src/app/modules/pages/pages.component';
import { DashboardComponent } from 'src/app/modules/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'src/app/modules/pages/progress/progress.component';
import { Graphics1Component } from 'src/app/modules/pages/graphics1/graphics1.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics1', component: Graphics1Component },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
})
export class PagesRoutingModule {}
