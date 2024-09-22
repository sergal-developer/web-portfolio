import { Component, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'experience',
    templateUrl : './experience.html',
    styleUrls   : [ './experience.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class ExperienceComponent {
    title = 'SERGAL';
    constructor() {
    }
}
