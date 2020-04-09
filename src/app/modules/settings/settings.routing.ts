import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';

const settingsRoutes: Routes = [
  { path: 'account-settings', component: AccountSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(settingsRoutes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
