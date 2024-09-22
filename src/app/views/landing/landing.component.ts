import { Component, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'landing',
    templateUrl : './landing.html',
    styleUrls   : [ './landing.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class LandingComponent {
    title = 'SERGAL';
    constructor() {
    }
}
