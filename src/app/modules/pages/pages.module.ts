// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { PagesRoutingModule } from 'src/app/modules/pages/pages.routing';

import { SharedModule } from 'src/app/shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from 'src/app/modules/pages/dashboard/dashboard.component';

import { ProgressComponent } from 'src/app/modules/pages/progress/progress.component';
import { IncreaserComponent } from './progress/components/increaser/increaser.component';

import { Graphics1Component } from 'src/app/modules/pages/graphics1/graphics1.component';
import { DonaGraphicComponent } from './graphics1/components/dona-graphic/dona-graphic.component';

@NgModule({
  imports: [RouterModule, SharedModule, PagesRoutingModule, ChartsModule],
  exports: [DashboardComponent, ProgressComponent, Graphics1Component],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    IncreaserComponent,
    Graphics1Component,
    DonaGraphicComponent,
  ],
  providers: [],
})
export class PagesModule {}
