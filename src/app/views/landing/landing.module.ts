import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../controls/controls.module';
import { GoogleAnalyticsService } from '../../shared/services/google.analytics.service';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LandingComponent } from './landing.component';

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
