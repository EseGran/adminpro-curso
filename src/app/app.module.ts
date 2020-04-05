import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app/app.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";
import { Graphics1Component } from "./modules/pages/graphics1/graphics1.component";
import { ProgressComponent } from "./modules/pages/progress/progress.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";
import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";
import { PagesComponent } from './modules/pages/pages.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    Graphics1Component,
    ProgressComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    NoPageFoundComponent,
    RegisterComponent,
    PagesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
