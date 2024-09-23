import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'timeline',
    templateUrl : './timeline.html',
    styleUrls   : [ './timeline.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class TimelineComponent {
    @Input() from: number= 2006;
    @Input() to: number = 2024;
    @Input() projects: Array<any> = [];
    @Input() institutions: Array<any> = [];

    steps = this.to - this.from;
    years: Array<number> = [];
    currentZoom = 100;
    
    constructor() {
        this.init();
    }

    init() {
        this.steps = this.to - this.from;
        Object.entries(this.steps).map((year, index) => {
            const y = this.from + index;
            this.years.push(y);
        });

        this.normalize();
    }


    handleZoom() {
        console.log('target: ', this.currentZoom);
    }

    normalize() {
        this.institutions.map((evt: any) => {
            evt._duration = 'timeline-event-years-' + evt.duration + evt.durationFraction;
            evt._level = ' timeline-level-' + evt.level;
            evt._showDetails = evt.showDetails ? ' show-details' : ' ';
            evt._color = evt.color ? evt.color : '';
            evt._className = evt._duration + evt._level + evt._showDetails + evt._color;
        });

        this.projects.map((evt: any) => {
            evt._duration = 'timeline-event-years-' + evt.duration + evt.durationFraction;
            evt._level = ' timeline-level-' + evt.level;
            evt._showDetails = evt.showDetails ? ' show-details' : ' ';
            evt._color = evt.color ? evt.color : '';
            evt._className = evt._duration + evt._level + evt._showDetails + evt._color;
        });
    }
}
