import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../../../controls/controls.module';
import { GoogleAnalyticsService } from '../../../../shared/services/google.analytics.service';
import { IncidentMapComponent } from './incidentMap.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,

        // COMPONENTS
        ControlsModule,
        TranslateModule
    ],
    declarations: [
        IncidentMapComponent
    ],
    exports: [
        IncidentMapComponent
    ],
    providers: [
        GoogleAnalyticsService
    ]
})
export class IncidentMapModule {
}
