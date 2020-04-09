import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Settings {
  themeUrl: string;
  theme: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default',
  };

  constructor(@Inject(DOCUMENT) private document) {
    this.loadSettings();
  }

  saveSettings() {
    // console.log('saved in localStorage!!!');
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      // console.log('loading from localStorage!!!');

      this.setTheme(this.settings.theme);
    } else {
      this.setTheme(this.settings.theme);
      // console.log('Default values using!!!');
    }
  }

  setTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    this.document.getElementById('theme').setAttribute('href', url);

    this.settings.theme = theme;
    this.settings.themeUrl = url;

    this.saveSettings();
  }
}
