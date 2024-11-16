import { Component, ViewEncapsulation } from '@angular/core';
import { PORTFOLIO } from '../../../../data/datacontent';

@Component( {
    selector    : 'portfolio-list',
    templateUrl : './portfolio-list.html',
    styleUrls   : [ './portfolio-list.scss' ],
    encapsulation: ViewEncapsulation.None
} )

export class PortfolioListComponent {
    title = 'SERGAL';
    data = PORTFOLIO;
    portfolios: Array<any> = [];
    size = 100;
    style = 'width: 100%';

    portfolio = PORTFOLIO.list;

    constructor() {
    }


    setRamdonSize() {
        const percent = Math.floor(Math.random() * 100);
        console.log('percent: ', percent);
        this.style = `width: ${percent}%`
    }
}
