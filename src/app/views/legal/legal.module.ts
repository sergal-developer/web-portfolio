import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../controls/controls.module';
import { PortfolioComponentsModule } from './components/portfolio.components.module';
import { LegalViewComponent } from './legal.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: LegalViewComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        ControlsModule,
        TranslateModule,
        PortfolioComponentsModule
    ],
    declarations: [
        LegalViewComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class LegalModule {
}
