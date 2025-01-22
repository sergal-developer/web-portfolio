import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../../../controls/controls.module';
import { GoogleAnalyticsService } from '../../../../shared/services/google.analytics.service';
import { UltrauiComponent } from './ultraui.component';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,

        // COMPONENTS
        ControlsModule,
        TranslateModule
    ],
    declarations: [
        UltrauiComponent
    ],
    exports: [
        UltrauiComponent
    ],
    providers: [
        GoogleAnalyticsService
    ]
})
export class UltrauiModule {
}
