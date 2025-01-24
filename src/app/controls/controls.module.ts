import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainElementComponent } from './main-element/main-element.component';
import { TimelineGroupComponent } from './timeline-group/timeline-group.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TitlepageComponent } from './titlepage/titlepage.component';

@NgModule ( {
  imports: [
    CommonModule,
    // Controls
  ],
  declarations: [
    MainElementComponent,
    TimelineComponent,
    TimelineGroupComponent,
    TitlepageComponent,
  ],
  exports: [
    MainElementComponent,
    TimelineComponent,
    TimelineGroupComponent,
    TitlepageComponent,
  ],
  providers: []
} )
export class ControlsModule {}