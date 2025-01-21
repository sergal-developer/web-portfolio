import { Component, ViewEncapsulation } from '@angular/core';
import { GoogleAnalyticsService } from './shared/services/google.analytics.service';

@Component({
  selector: 'app-root',
  template : `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  encapsulation : ViewEncapsulation.None,
})
export class AppComponent {
  
  constructor(public _ga: GoogleAnalyticsService) {

    // Google analytics init
    // _ga.setTrackID(this._settingsService.settings.portal.analytics.trackid);
    const trackProd = "G-J99CJ0NJLS";
    _ga.setTrackID(trackProd);
    _ga.createTrackID();
  }
}
