import { Component } from '@angular/core';
import { SettingsService } from 'src/app/modules/settings/services/settings.service';

@Component({
  selector: 'admp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public settingsService: SettingsService) {}
}
