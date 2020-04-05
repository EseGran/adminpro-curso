// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from 'src/app/modules/pages/pages.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from 'src/app/modules/pages/dashboard/dashboard.component';
import { ProgressComponent } from 'src/app/modules/pages/progress/progress.component';
import { Graphics1Component } from 'src/app/modules/pages/graphics1/graphics1.component';

@NgModule({
  imports: [RouterModule, SharedModule, PagesRoutingModule],
  exports: [DashboardComponent, ProgressComponent, Graphics1Component],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
  ],
  providers: [],
})
export class PageModule {}
