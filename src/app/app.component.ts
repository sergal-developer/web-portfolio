import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
}
