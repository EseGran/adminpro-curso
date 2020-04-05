import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  providers: [],
})
export class SharedModule {}
