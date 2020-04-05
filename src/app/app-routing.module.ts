import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { RegisterComponent } from "./modules/auth/pages/register/register.component";

import { NoPageFoundComponent } from "./shared/no-page-found/no-page-found.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', component: NoPageFoundComponent },
];  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
