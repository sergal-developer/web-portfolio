import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AdnComponent } from './adn/adn.component';
import { MainElementComponent } from './main-element/main-element.component';

@NgModule ( {
  imports: [
    CommonModule,
    // Controls
  ],
  declarations: [
    AdnComponent,
    MainElementComponent,
    TimelineComponent,
    TitlepageComponent
  ],
  exports: [
    AdnComponent,
    MainElementComponent,
    TimelineComponent,
    TitlepageComponent
  ],
  providers: []
} )
export class ControlsModule {}