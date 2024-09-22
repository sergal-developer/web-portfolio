import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlepageComponent } from './titlepage/titlepage.component';

@NgModule ( {
  imports: [
    CommonModule,
    // Controls
  ],
  declarations: [
    TitlepageComponent
  ],
  exports: [
    TitlepageComponent
  ],
  providers: []
} )
export class ControlsModule {}