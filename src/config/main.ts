import '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from '../app/app.module';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

export function main() {
    return platformBrowserDynamic().bootstrapModule(AppModule)
}

if ( document.readyState === 'complete' ) {
    main();
} else {
    document.addEventListener( 'DOMContentLoaded', main );
}