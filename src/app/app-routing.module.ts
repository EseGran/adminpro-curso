import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "./modules/pages/pages.component";
import { DashboardComponent } from "./modules/pages/dashboard/dashboard.component";
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";

import { ProgressComponent } from "./modules/pages/progress/progress.component";
import { Graphics1Component } from "./modules/pages/graphics1/graphics1.component";

import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

const routes: Routes = [
  { 
    path: '',
    component: PagesComponent,
    children: [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'graphics1', component: Graphics1Component },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
  },
  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoPageFoundComponent },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
