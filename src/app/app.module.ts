import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app.routes';
import { LandingModule } from './views/landing/landing.module';
import { PortfolioModule } from './views/portfolio/portfolio.module';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EventBusService } from './shared/events/EventBus.service';

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
    PortfolioModule
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslator(http: HttpClient) {
  return new TranslateHttpLoader(http);
}