import { Component, ViewEncapsulation } from '@angular/core';

@Component( {
    selector    : 'skills',
    templateUrl : './skills.html',
    styleUrls   : [ './skills.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class SkillsComponent {
    title = 'SERGAL';
    constructor() {
    }
}
