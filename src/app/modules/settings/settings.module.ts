import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings.routing';

import { SharedModule } from 'src/app/shared/shared.module';
import { AccountSettingsComponent } from 'src/app/modules/settings/pages/account-settings/account-settings.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [AccountSettingsComponent],
})
export class SettingsModule { }
