import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ControlsModule } from '../../controls/controls.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { PortfolioViewComponent } from './portfolio.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserAnimationsModule,

        RouterModule.forChild([{ path: '', component: PortfolioViewComponent, children: [] }]),
        // VIEWS

        // COMPONENTS
        ControlsModule
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
