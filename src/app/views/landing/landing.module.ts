import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ControlsModule } from '../../controls/controls.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: LandingComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        ControlsModule,
        TranslateModule
    ],
    declarations: [
        LandingComponent,
        AboutComponent,
        ExperienceComponent,
        SkillsComponent,
        PortfolioListComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        GoogleAnalyticsService
    ]
})
export class LandingModule {
}
