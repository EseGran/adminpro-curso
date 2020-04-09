import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from 'src/app/shared/header/header.component';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from 'src/app/shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  providers: [],
})
export class SharedModule {}
