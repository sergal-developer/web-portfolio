import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { EventBusService } from './shared/events/EventBus.service';
import { GoogleAnalyticsService } from './shared/services/google.analytics.service';
import { LandingModule } from './views/landing/landing.module';
import { PortfolioModule } from './views/portfolio/portfolio.module';
import { HelpModule } from './views/help/help.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [  
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutes,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory:httpTranslator,
        deps: [HttpClient]
      }
    }),
    LandingModule,
    PortfolioModule,
    HelpModule
  ],
  providers: [EventBusService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslator(http: HttpClient) {
  return new TranslateHttpLoader(http);
}