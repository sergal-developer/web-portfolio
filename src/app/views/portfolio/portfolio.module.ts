import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../controls/controls.module';
import { PortfolioViewComponent } from './portfolio.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: PortfolioViewComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        ControlsModule,
        TranslateModule
    ],
    declarations: [
        PortfolioViewComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class PortfolioModule {
}
