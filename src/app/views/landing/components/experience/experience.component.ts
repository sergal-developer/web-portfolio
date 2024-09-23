import { Component, ViewEncapsulation } from '@angular/core';
import { EXPERIENCE } from '../../../../data/datacontent';

@Component( {
    selector    : 'experience',
    templateUrl : './experience.html',
    styleUrls   : [ './experience.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class ExperienceComponent {
    title = 'SERGAL';
    data = EXPERIENCE;
    from = 2006;
    to = 2024;
    constructor() {
    }
}
