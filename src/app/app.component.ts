import { Component, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from './shared/services/google.analytics.service';
import { ConfigData } from './shared/content/config.data';

@Component({
  selector: 'app-root',
  template : `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  encapsulation : ViewEncapsulation.None,
})
export class AppComponent {
  
  constructor(public _ga: GoogleAnalyticsService) {
    // Google analytics
    _ga.setTrackID(ConfigData.googleAnalytics);
    _ga.createTrackID();
  }
}
