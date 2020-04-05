import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Módulos
import { PageModule } from 'src/app/modules/pages/pages.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { NoPageFoundComponent } from 'src/app/shared/no-page-found/no-page-found.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, SharedModule, PageModule],
  exports: [],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
