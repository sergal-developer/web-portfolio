import { Component, ViewEncapsulation } from '@angular/core';
import { SKILLS } from '../../../../data/datacontent';

@Component( {
    selector    : 'skills',
    templateUrl : './skills.html',
    styleUrls   : [ './skills.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class SkillsComponent {
    title = 'SERGAL';
    data = SKILLS;

    constructor() {
        // console.log('this.data: ', this.data);
    }
}
