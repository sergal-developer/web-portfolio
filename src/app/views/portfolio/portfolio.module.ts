import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ControlsModule } from '../../controls/controls.module';
import { PortfolioViewComponent } from './portfolio.component';
import { PortfolioComponentsModule } from './components/portfolio.components.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: PortfolioViewComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        ControlsModule,
        TranslateModule,
        PortfolioComponentsModule
    ],
    declarations: [
        PortfolioViewComponent,
    ],
    exports: [
        RouterModule,
        PortfolioComponentsModule
    ],
    providers: []
})
export class PortfolioModule {
}
