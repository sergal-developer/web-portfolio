import { Component, ViewEncapsulation } from '@angular/core';
import { PORTFOLIO, SKILLS } from '../../../../data/datacontent';

@Component( {
    selector    : 'skills',
    templateUrl : './skills.html',
    styleUrls   : [ './skills.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class SkillsComponent {
    title = 'SERGAL';
    data = SKILLS;
    skills: Array<any> = [];
    size = 100;
    style = 'width: 100%';

    portfolio = PORTFOLIO.list;

    constructor() {
        this.skills = this.data.skills;
        console.log('this.data: ', this.portfolio);
    }


    setRamdonSize() {
        const percent = Math.floor(Math.random() * 100);
        console.log('percent: ', percent);
        this.style = `width: ${percent}%`
    }
}
