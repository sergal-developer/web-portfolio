import { NgModule } from '@angular/core';
import { IncidentMapModule } from './incidentMap/incidentMap.module';
import { GlowModule } from './glow/glow.module';
import { InteraptModule } from './interapt/interapt.module';
import { UltrauiModule } from './ultraui/ultraui.module';

@NgModule({
    imports: [
        GlowModule,
        IncidentMapModule,
        InteraptModule,
        UltrauiModule
    ],
    exports: [
        GlowModule,
        IncidentMapModule,
        InteraptModule,
        UltrauiModule
    ],
})
export class PortfolioComponentsModule {
}
