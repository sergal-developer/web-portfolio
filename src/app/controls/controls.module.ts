import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AdnComponent } from './adn/adn.component';

@NgModule ( {
  imports: [
    CommonModule,
    // Controls
  ],
  declarations: [
    AdnComponent,
    TitlepageComponent,
    TimelineComponent
  ],
  exports: [
    AdnComponent,
    TitlepageComponent,
    TimelineComponent
  ],
  providers: []
} )
export class ControlsModule {}